import UploadTpl from './template/Upload.html'

export default {
  template: UploadTpl,
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    action: {
      type: 'string'
    },
    data: {
      type: 'object'
    },
    multiple: {
      type: 'boolean',
      value: function (value) {
        return value ? true : false;
      }
    },
    accept: {
      type: 'array'
    }
  },

  watchers: {
    
  },

  methods: {
    createInputElement: function () {
      var me = this;
      me.inputElement = document.createElement('input');
      me.inputElement.type = 'file';
      
      me.inputElement.multiple = me.get('multiple');

      var accept = me.get('accept');
      if (accept) {
        me.inputElement.accept = me.get('accept').join(',');
      }

      me.inputElement.style.display = 'none';
      me.$el.appendChild(me.inputElement);

      me.fileChange = function (event) {

        var files = event.target.files;
        
        me.fire(
          'uploadstart',
          {
            file: files[ 0 ],
          } 
        );
        me.upload(files[ 0 ]);

      };
      me.inputElement.onchange = me.fileChange;
    },

    upload: function (file) {
      var me = this;
      var xhr = new XMLHttpRequest();
      me.xhr = xhr;
      
      xhr.open('post', me.get('action'), true);
      var formData = new FormData();
      var data = me.get('data');
      if (data) {
        for(var key in data) {
          formData.append(key, data[ key ]);
        }
      }
      formData.append('file', file);
      xhr.send(formData);

      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {  // 4 为完成
          if (xhr.status == 200) {  // 200 为成功
            me.fire(
              'uploadsuccess',
              JSON.parse(xhr.responseText)
            );
          } 
          else {
            me.fire(
              'uploadsuccess',
              JSON.parse(xhr.responseText)
            );
          }
        }
      };
    },  
    
    click: function () {
      this.inputElement.click();
    }
  },

  afterMount: function () {
    var me = this;
    me.createInputElement();
  }
};