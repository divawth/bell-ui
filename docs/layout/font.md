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
        <tbody>
            <tr>
                <td>HeadLine 主标题</td>
                <td class="bell-text-large" style="font-size: 28px">用 Bell 快速搭建页面</td>
                <td>28px</td>
            </tr>
            <tr>
                <td>Title 标题</td>
                <td style="font-size: 20px">用 Bell 快速搭建页面</td>
                <td>20px</td>
            </tr>
            <tr>
                <td>subHead 小标题</td>
                <td style="font-size: 16px">用 Bell 快速搭建页面</td>
                <td>16px</td>
            </tr>
            <tr>
                <td>text 正文</td>
                <td style="font-size: 14px">用 Bell 快速搭建页面</td>
                <td>14px</td>
            </tr>
            <tr>
                <td>textSmall 正文</td>
                <td style="font-size: 13px">用 Bell 快速搭建页面</td>
                <td>13px</td>
            </tr>
            <tr>
                <td>caption 辅助文字</td>
                <td style="font-size: 12px">用 Bell 快速搭建页面</td>
                <td>12px</td>
            </tr>
        </tbody>
    </table>
</html>

> 字体基本色/色彩对比度

最基本的常识是，相同颜色的背景和文字是很难阅读的。但有些人不知道的是，带有过强对比度的文本会有些炫目，同样难以阅读。这一点在深色背景下尤其明显。

要获得良好的辨识度，文本应当满足一个最低的对比度，也就是4.5:1（依据明度计算）。7:1的对比度是最适合阅读的。

这些色彩的组合同样要考虑到某些非典型用户对于对比度的不同反应。

<html>
    <table class="bell-table">
        <tbody>
            <tr>
                <td>HeadLine 主标题</td>
                <td style="font-size: 28px; color: rgba(0,0,0,.87);">用 Bell 快速搭建页面</td>
                <td>0.87</td>
            </tr>
            <tr>
                <td>Title 标题</td>
                <td style="font-size: 20px; color: rgba(0,0,0,.87); font-weight: bold;">用 Bell 快速搭建页面</td>
                <td>0.87</td>
            </tr>
            <tr>
                <td>subHead 小标题</td>
                <td style="font-size: 16px; color: rgba(0,0,0,.87);">用 Bell 快速搭建页面</td>
                <td>0.87</td>
            </tr>
            <tr>
                <td>text 正文</td>
                <td style="font-size: 14px; color: rgba(0,0,0,.87); font-weight: bold;">用 Bell 快速搭建页面</td>
                <td>0.87</td>
            </tr>
            <tr>
                <td>textSmall 正文</td>
                <td style="font-size: 13px; color: rgba(0,0,0,.87);">用 Bell 快速搭建页面</td>
                <td>0.87</td>
            </tr>
            <tr>
                <td>caption 辅助文字</td>
                <td style="font-size: 12px; color: rgba(0,0,0,.54);">用 Bell 快速搭建页面</td>
                <td>0.54</td>
            </tr>
            <tr>
                <td>失效文字</td>
                <td style="font-size: 12px; color: rgba(0,0,0,.37);">用 Bell 快速搭建页面</td>
                <td>0.34</td>
            </tr>
        </tbody>
    </table>
</html>

> 行高

行高是通过每个样式各自的尺寸和粗细决定的，以获得良好的可读性和合适的间距。只有“正文”、“小标题”、“正文(small)”等类似的样式中才允许使用自动换行。其它所有样式应当以单行形式出现。

<html>
    <table class="bell-table">
        <tbody>
            <tr>
                <td>HeadLine 主标题</td>
                <td style="width: 130px;font-size: 28px; color: rgba(0,0,0,.87); line-height: 40px;">用 Bell 快速搭建页面</td>
                <td>28px - 40px</td>
            </tr>
            <tr>
                <td>Title 标题</td>
                <td style="width: 130px;font-size: 18px; color: rgba(0,0,0,.87); line-height: 30px;">用 Bell 快速搭建页面</td>
                <td>18px - 30px</td>
            </tr>
            <tr>
                <td>subHead 小标题</td>
                <td style="width: 130px;font-size: 16px; color: rgba(0,0,0,.87); line-height: 28px;">用 Bell 快速搭建页面</td>
                <td>16px - 28px</td>
            </tr>
            <tr>
                <td>text 正文</td>
                <td style="width: 130px;font-size: 14px; color: rgba(0,0,0,.87); line-height: 24px;">用 Bell 快速搭建页面</td>
                <td>14px - 24px</td>
            </tr>
            <tr>
                <td>textSmall 正文(small)</td>
                <td style="width: 130px;font-size: 13px; color: rgba(0,0,0,.87); line-height: 20px;">用 Bell 快速搭建页面</td>
                <td>13px - 20px</td>
            </tr>
            <tr>
                <td>caption 辅助文字</td>
                <td style="width: 130px;font-size: 12px; color: rgba(0,0,0,.54); line-height: 18px;">用 Bell 快速搭建页面</td>
                <td>12px - 18px</td>
            </tr>
        </tbody>
    </table>
</html>
