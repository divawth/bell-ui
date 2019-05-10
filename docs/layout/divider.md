#### Divider 分割线

区隔内容的分割线

#### 何时使用

- 对不同章节的文本段落进行分割。
- 对行内文字，链接进行分割，例如表格的操作列。

> 基础演示

    export default {
      isViewFullBlock: true,
      height: 300,
      template: `
        <div>
          <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
          <Divider />
          <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
          <Divider>With Text</Divider>
          <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
          <Divider dashed />
          <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
        </div>
      `
    }


