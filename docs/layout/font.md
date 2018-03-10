浏览器会查找每一个连续的字体，如果可能的话，会选择第一个字体，如果不能找到字体(在系统中或在CSS中定义)，则会返回到下一个字体。

- -apple-system 在 ios 和 macOS 上使用（而不是 Chrome）
- BlinkMacSystemFont 在 macOS 的 Chrome 上使用
- Segoe UI 在 Windows 10 上使用
- Roboto 在 Android 上使用
- Oxygen-Sans 在 GNU+Linux 上使用
- Ubuntu 在 Linux 上使用
- "Helvetica Neue" and Helvetica 在 macOS 10.10 上使用
- Arial 被广泛的操作系统所支持
- sans-serif 如果不支持其他字体就返回 sans-serif

> 字体样式

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
    Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

> 字体大小


<html>
    <table class="bell-table">
        <tr>
            <td class="bell-text" >字体大小</td>
            <td class="bell-text">示例</td>
            <td>类名</td>
        </tr>
        <tbody>
            <tr>
                <td class="bell-text huge" >Huge 超大号字体</td>
                <td class="bell-text huge">用 Bell 快速搭建页面</td>
                <td>bell-text huge</td>
            </tr>
            <tr>
                <td class="bell-text large" >Large 大号字体</td>
                <td class="bell-text large">用 Bell 快速搭建页面</td>
                <td>bell-text large</td>
            </tr>
            <tr>
                <td class="bell-text" >正常字体</td>
                <td class="bell-text">用 Bell 快速搭建页面</td>
                <td>bell-text</td>
            </tr>
            <tr>
                <td class="bell-text small" >Small 小号字体</td>
                <td class="bell-text small">用 Bell 快速搭建页面</td>
                <td>bell-text large</td>
            </tr>
            <tr>
                <td class="bell-text tiny" >Tiny 超小号字体</td>
                <td class="bell-text tiny">用 Bell 快速搭建页面</td>
                <td>bell-text tiny</td>
            </tr>
        </tbody>
    </table>
</html>

> 排版字体大小

<html>
    <table class="bell-table">
        <tr>
            <td class="bell-text" >字体大小</td>
            <td class="bell-text">示例</td>
            <td>类名</td>
        </tr>
        <tbody>
            <tr>
                <td class="bell-text h1" >h1</td>
                <td class="bell-text h1">用 Bell 快速搭建页面</td>
                <td>bell-text h1</td>
            </tr>
            <tr>
                <td class="bell-text h2" >h2</td>
                <td class="bell-text h2">用 Bell 快速搭建页面</td>
                <td>bell-text h2</td>
            </tr>
            <tr>
                <td class="bell-text h3" >h3</td>
                <td class="bell-text h3">用 Bell 快速搭建页面</td>
                <td>bell-text h3</td>
            </tr>
            <tr>
                <td class="bell-text h4" >h4</td>
                <td class="bell-text h4">用 Bell 快速搭建页面</td>
                <td>bell-text h4</td>
            </tr>
            <tr>
                <td class="bell-text h5" >h5</td>
                <td class="bell-text h5">用 Bell 快速搭建页面</td>
                <td>bell-text h5</td>
            </tr>
            <tr>
                <td class="bell-text h6" >h6</td>
                <td class="bell-text h6">用 Bell 快速搭建页面</td>
                <td>bell-text h6</td>
            </tr>
        </tbody>
    </table>
</html>

> 一些除了主体文字还常用的文字大小

<html>
    <table class="bell-table">
        <tr>
            <td class="bell-text" >字体大小</td>
            <td class="bell-text">示例</td>
            <td>类名</td>
        </tr>
        <tbody>
            <tr>
                <td class="bell-text" >display1</td>
                <td class="bell-text display1">Display1</td>
                <td>bell-text display1</td>
            </tr>
            <tr>
                <td class="bell-text">display2</td>
                <td class="bell-text display2">Display2</td>
                <td>bell-text display2</td>
            </tr>
            <tr>
                <td class="bell-text">display3</td>
                <td class="bell-text display3">Display3</td>
                <td>bell-text display3</td>
            </tr>
            <tr>
                <td class="bell-text" >display4</td>
                <td class="bell-text display4">Display4</td>
                <td>bell-text display4</td>
            </tr>
        </tbody>
    </table>
</html>

> 字体的基本颜色

<html>
    <table class="bell-table">
        <tr>
            <td class="bell-text" >字体大小</td>
            <td class="bell-text">示例</td>
            <td>类名</td>
        </tr>
        <tbody>
            <tr>
                <td class="bell-text primary" >primary</td>
                <td class="bell-text primary">用 Bell 快速搭建页面</td>
                <td>bell-text primary</td>
            </tr>
            <tr>
                <td class="bell-text success" >success</td>
                <td class="bell-text success">用 Bell 快速搭建页面</td>
                <td>bell-text success</td>
            </tr>
            <tr>
                <td class="bell-text error" >error</td>
                <td class="bell-text error">用 Bell 快速搭建页面</td>
                <td>bell-text error</td>
            </tr>
            <tr>
                <td class="bell-text info" >info</td>
                <td class="bell-text info">用 Bell 快速搭建页面</td>
                <td>bell-text info</td>
            </tr>
            <tr>
                <td class="bell-text warning" >warning</td>
                <td class="bell-text warning">用 Bell 快速搭建页面</td>
                <td>bell-text warning</td>
            </tr>
            <tr>
                <td class="bell-text danger" >danger</td>
                <td class="bell-text danger">用 Bell 快速搭建页面</td>
                <td>bell-text danger</td>
            </tr>
            <tr>
                <td class="bell-text main" >main</td>
                <td class="bell-text main">用 Bell 快速搭建页面</td>
                <td>bell-text main</td>
            </tr>
            <tr>
                <td class="bell-text secondary" >secondary</td>
                <td class="bell-text secondary">用 Bell 快速搭建页面</td>
                <td>bell-text secondary</td>
            </tr>
            <tr>
                <td class="bell-text muted" >muted</td>
                <td class="bell-text muted">用 Bell 快速搭建页面</td>
                <td>bell-text muted</td>
            </tr>
        </tbody>
    </table>
</html>

> 文本对齐

<html>
    <p class="bell-text left">Left aligned text on all viewport sizes</p>
    <p class="bell-text center">Center aligned text on all viewport sizes</p>
    <p class="bell-text right">Right aligned text on all viewport sizes</p>
</html>

> 文本包装和溢出

<html>
    <p class="bell-text danger h5">text with a .bell-text-nowrap class.</p>
    <div class="bell-text bell-text-nowrap" style="width: 8rem; background: #f90">
      This text should overflow the parent.
    </div>
    <p class="bell-text danger h5">text with a .bell-text-truncate class. Requires display: inline-block or display: block.</p>
    <div class="row">
        <div class="bell-text bell-text-truncate" style="max-width: 150px;">
            Praeterea iter est quasdam res quas ex communi.
        </div>
    </div>
</html>

> 文本转换

<html>
    <p class="bell-text danger h5">Transform to lowsercase</p>
    <p class="bell-text-lowercase">Lowercased text.</p>
    <p class="bell-text danger h5">Transform to uppercase</p>
    <p class="bell-text-uppercase">Uppercased text.</p>
    <p class="bell-text danger h5">Transform to captitalize</p>
    <p class="bell-text-capitalize">CapiTaliZed text.</p>
</html>

> 文本的加粗和斜体

<html>
    <p class="bell-text-weight-bold">Bold text.</p>
    <p class="bell-text-weight-normal">Normal weight text.</p>
    <p class="bell-text-weight-light">Light weight text.</p>
    <p class="bell-text-italic">Italic text.</p>
</html>

> 文本组合

<html>
    <div class="bell-texts tight">
        <span class="bell-text bell-bg-success white">bell-texts tight</span>
        <span class="bell-text bell-bg-success white">bell-texts tight</span>
        <span class="bell-text bell-bg-success white">bell-texts tight</span>
        <span class="bell-text bell-bg-success white">bell-texts tight</span>
    </div>
    <div class="bell-texts">
        <span class="bell-text bell-bg-danger white">bell-texts</span>
        <span class="bell-text bell-bg-danger white">bell-texts</span>
        <span class="bell-text bell-bg-danger white">bell-texts</span>
        <span class="bell-text bell-bg-danger white">bell-texts</span>
    </div>
    <div class="bell-texts">
        <div class="bell-text bell-bg-info white fluid">bell-texts</div>
        <div class="bell-text bell-bg-info white fluid">bell-texts</div>
        <div class="bell-text bell-bg-info white fluid">bell-texts</div>
        <div class="bell-text bell-bg-info white fluid">bell-texts</div>
    </div>
</html>