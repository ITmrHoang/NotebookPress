# **WEB**

## **I. WEB là gì?**

### **1\. Khái niệm:**

    Website là một tập hợp các trang web liên kết với nhau, được lưu trữ trên một máy chủ và có thể truy cập qua Internet. Mỗi trang web thường được xác định bằng một URL (Uniform Resource Locator) duy nhất. \=\> hiểu đơn giản là một hệ thống hiển thị thông tin trên trình duyệt qua internet.

- Back-End (BE):

  > Định nghĩa: Là phần không nhìn thấy của ứng dụng, nơi xử lý logic và lưu trữ dữ liệu.

  > Công nghệ sử dụng: Bao gồm các ngôn ngữ như PHP, Python, Java, Ruby, và Node.js, cùng với cơ sở dữ liệu như MySQL, PostgreSQL, MongoDB.

  > Chức năng: Xử lý các yêu cầu từ frontend, tương tác với cơ sở dữ liệu, và gửi phản hồi về cho frontend.

  > framework : PHP( laravel, cakephp,Symfony,CodeIgniter, YI), Python (django, Flask , fast), Java( sevelt, spring), nodejs ( nestjs, expressjs)
  > => Xử lý dữ liệu, logic và tương tác với cơ sở dữ liệu. chạy bên dưới để trả về dữ liệu mà người dùng không nhìn thấy

- Front-End:

  > Định nghĩa: Là phần giao diện người dùng của ứng dụng web, nơi người dùng tương tác trực tiếp.

  > Công nghệ sử dụng: Bao gồm HTML, CSS, JavaScript, và các framework như React, Angular, Vue.js.

  > Chức năng: Xử lý hiển thị nội dung, tạo trải nghiệm người dùng, và quản lý tương tác.
  > => Tạo giao diện người dùng, xử lý trải nghiệm người dùng cái mà hiển trị trên web người dùng thấy

- **Website tĩnh**: Nội dung không thay đổi thường xuyên, được tạo ra từ HTML và CSS.
- **Website động**: Nội dung có thể thay đổi tùy thuộc vào dữ liệu từ cơ sở dữ liệu hoặc tương tác của người dùng, thường sử dụng các ngôn ngữ lập trình như PHP, Python, Ruby, v.v.

- Server-Side Rendering : Traditional Web Application: các hoạt động, xử lý và logic diễn ra trên máy chủ trong một ứng dụng web. Khi người dùng gửi yêu cầu từ trình duyệt (client), máy chủ sẽ xử lý yêu cầu đó và trả về kết quả, thường là dữ liệu hoặc trang HTML để hiển thị trên trình duyệt.
  => Server-rendered applications: là mô hình của SSR kết hợp FE và BE. VD dùng PHP: Mọi logic và giao diện đều được viết bằng PHP. Trong mô hình này, khi một người dùng gửi yêu cầu, máy chủ xử lý yêu cầu đó, chạy mã của PHP và tạo ra HTML động để gửi về trình duyệt. Điều này có thể đơn giản cho việc phát triển, nhưng có thể làm giảm tốc độ tải trang so với các ứng dụng SPA (Single Page Application) sử dụng AJAX và API.

- **Client-side rendering (CSR)** là một kỹ thuật trong phát triển web, trong đó nội dung của trang web được tạo ra và hiển thị trực tiếp trên trình duyệt của người dùng (client), thay vì trên máy chủ (server). Điều này thường được thực hiện thông qua JavaScript.

**HTTP/HTTPS**:

- Hiểu giao thức truyền tải dữ liệu giữa client và server.

- Cách hoạt động của các yêu cầu và phản hồi HTTP.

### **2\. Hosting (Lưu trữ web)**

- **Định nghĩa**: Hosting là dịch vụ lưu trữ trang web trên internet. Nhà cung cấp hosting sẽ cho bạn không gian trên máy chủ (server) để lưu trữ các tệp trang web như HTML, CSS, JavaScript, hình ảnh, và cơ sở dữ liệu.
- **Các loại hosting**:

  - **Shared Hosting**: Nhiều trang web cùng sử dụng một máy chủ. Phù hợp với trang web nhỏ.
  - **VPS (Virtual Private Server)**: Một máy chủ vật lý được chia thành nhiều máy chủ ảo. Cung cấp nhiều tài nguyên và tùy chỉnh hơn.
  - **Dedicated Server**: Toàn bộ máy chủ dành riêng cho một trang web. Phù hợp với các trang web lớn cần hiệu suất cao.
  - **Cloud Hosting**: Sử dụng nhiều máy chủ để lưu trữ trang web. Tăng tính linh hoạt và khả năng mở rộng.

  ### **3\. Domain (Tên miền)**

- **Định nghĩa**: Domain là địa chỉ mà người dùng nhập vào trình duyệt để truy cập vào một trang web. Nó giúp người dùng dễ dàng nhớ và truy cập vào trang web hơn là sử dụng địa chỉ IP.
- **Cấu trúc**: Một tên miền thường bao gồm:
  - **Tên miền cấp cao (TLD)**: Phần cuối, ví dụ: .com, .org, .net.
  - **Tên miền chính**: Phần trước TLD, ví dụ: example trong example.com.
- **Đăng ký**: Bạn cần đăng ký tên miền thông qua các nhà cung cấp tên miền (như GoDaddy, Namecheap) để đảm bảo rằng bạn sở hữu nó.

  ### **4\. Server (Máy chủ)**

- **Định nghĩa**: Server là một máy tính hoặc hệ thống phần mềm được thiết kế để cung cấp dịch vụ cho các máy tính khác (client) qua mạng. Trong ngữ cảnh web, server lưu trữ và xử lý các yêu cầu từ trình duyệt web.
- **Chức năng**: Khi người dùng nhập tên miền vào trình duyệt, yêu cầu sẽ được gửi đến server. Server sau đó sẽ trả về nội dung của trang web cho trình duyệt, cho phép người dùng xem trang đó.

  #### **Tóm tắt**

- **Domain**: Địa chỉ trang web (ví dụ: www.example.com).
- **Hosting**: Dịch vụ lưu trữ trang web trên máy chủ.
- **Server**: Máy tính xử lý và cung cấp nội dung cho trang web.

## **II. HTML?**

### **1.Khái niệm**

> tham khảo :https://www.geeksforgeeks.org/html-tutorial/?ref=outind

**HTML (HyperText Markup Language)** là ngôn ngữ đánh dấu tiêu chuẩn được sử dụng để tạo ra các trang web. HTML cung cấp cấu trúc cơ bản cho nội dung trên web bằng cách sử dụng các thẻ (tags) để định nghĩa các phần tử như văn bản, hình ảnh, liên kết và nhiều loại nội dung khác.  
**HTML** là sự kết hợp của Hypertext và Markup language . Hypertext định nghĩa liên kết giữa các trang web và Markup language định nghĩa tài liệu văn bản trong thẻ.

- HTML mô tả cấu trúc của một trang web thông qua một loạt các phần tử(element).
- HTML elements chỉ định cho trình duyệt cách hiển thị nội dung.
- HTML elements gán nhãn cho các phần nội dung, chẳng hạn như "đây là tiêu đề", "đây là đoạn văn", "đây là liên kết", v.v.

**lưu ý**: HTML,CSS không phải ngôn ngữ lập trình: HTML: Là ngôn ngữ đánh dấu dùng để tạo cấu trúc và nội dung cho trang web. Chức năng: Xác định các phần tử như tiêu đề,
văn, hình ảnh, liên kết, và các thành phần khác của trang web.

### Sau đây là một số lợi ích chính của việc học HTML:

> Nền tảng cấu trúc web: HTML cung cấp bộ khung cơ bản của mọi trang web. Nó cho trình duyệt biết cách hiển thị văn bản, hình ảnh, liên kết, video và các thành phần khác.

> Dễ sử dụng: HTML nổi tiếng vì tính thân thiện với người mới bắt đầu. Các thẻ và cú pháp đơn giản của nó khiến nó trở thành nơi tuyệt vời để bắt đầu hành trình phát triển web của bạn.

> Cổng thông tin phát triển web: Thành thạo HTML là bước đầu tiên để học các công nghệ web phức tạp hơn như CSS (để tạo kiểu) và JavaScript (để tương tác).

> Ứng dụng đa dạng: Cho phép bạn xây dựng trang web, mẫu email, bản tin và nhiều hơn thế nữa.

> Thể hiện sự sáng tạo: Cho phép bạn hiện thực hóa ý tưởng của mình trực tuyến, tạo ra một lối thoát thú vị cho sự sáng tạo và thiết kế.

> **Element**: Phần tử \- Thành phần cơ bản trong HTML, định nghĩa cấu trúc và cách trình bày nội dung.  
> **Tag**: Thẻ \- Ký hiệu được sử dụng để xác định các phần tử HTML, thường được đặt trong dấu ngoặc nhọn.  
> **Attribute**: Thuộc tính \- Thông tin bổ sung cho các phần tử HTML, cung cấp thêm chi tiết hoặc điều chỉnh hành vi của phần tử.  
> **Markup**: Đánh dấu \- Cách mà HTML định nghĩa các phần tử và cấu trúc của nội dung trên trang web.  
> **Link**: Liên kết \- Một phần tử HTML cho phép người dùng di chuyển đến một trang web khác hoặc một phần khác của trang.  
> **Browser**: Trình duyệt \- Phần mềm dùng để truy cập và hiển thị các trang web.  
> **Content**: Nội dung \- Thông tin mà người dùng nhìn thấy trên trang web, có thể là văn bản, hình ảnh, liên kết, v.v.

### **Cấu trúc cơ bản của HTML**

Syntax HTML:  
**Thẻ (Tags)**: Mỗi phần tử HTML bắt đầu và kết thúc bằng một thẻ. Thẻ mở có dạng \<tagname\> và thẻ đóng có dạng \</tagname\>. Ví dụ:\<h1\>Đây là tiêu đề\</h1\>  
**Thuộc tính (Attributes)**: Các thẻ có thể chứa thuộc tính, cung cấp thông tin bổ sung. Thuộc tính được đặt trong thẻ mở. Ví dụ: \<a href="https://example.com"\>Đây là một liên kết\</a\>  
**Nội dung (Content)**: Nội dung nằm giữa thẻ mở và thẻ đóng. Ví dụ: \<p\>Đây là một đoạn văn.\</p\>

**Cấu trúc cây (Tree Structure)**: HTML có thể được tổ chức theo dạng cấu trúc cây, với các phần tử lồng nhau. Ví dụ:  
\<div\>  
 \<h1\>Tiêu đề chính\</h1\>  
 \<p\>Đoạn văn đầu tiên.\</p\>  
\</div\>  
**Cú pháp hợp lệ**: Để trình duyệt hiểu đúng mã HTML, cần đảm bảo rằng cú pháp hợp lệ, bao gồm việc đóng thẻ đúng cách và sử dụng đúng cách các thuộc tính.

### **DOM là gì?**

**DOM** (Document Object Model) là một mô hình lập trình mà các trình duyệt sử dụng để cấu trúc và quản lý nội dung của trang web. Nó không phải là HTML hay JavaScript mà là một giao diện giữa cả hai.

### **Các điểm chính về DOM:**

1. **Mô hình đối tượng**: DOM biến tài liệu HTML thành một cấu trúc dạng cây, trong đó mỗi phần tử (như thẻ, thuộc tính, văn bản) đều là một nút (node) trong cây.
2. **Tương tác với JavaScript**: DOM cho phép JavaScript truy cập và thay đổi nội dung, cấu trúc và kiểu dáng của trang web một cách động. Ví dụ, bạn có thể thêm, sửa đổi hoặc xóa các phần tử HTML thông qua JavaScript.
3. **Đối tượng**: Mỗi phần tử HTML, thẻ, thuộc tính đều được biểu diễn như một đối tượng trong DOM. Điều này cho phép lập trình viên thao tác với các phần tử một cách dễ dàng.

### **Tóm lại:**

- **DOM** là mô hình của tài liệu HTML.
- **HTML** là ngôn ngữ đánh dấu để tạo trang web.
- **JavaScript** sử dụng DOM để tương tác và thay đổi nội dung của trang web.

  Cấu trúc tài liệu HTML (thẻ \<\!DOCTYPE html\>, \<html\>, \<head\>, \<body\>)

* \<title\>: Đặt tiêu đề cho trang web.
* \<link\>: Liên kết đến các tệp bên ngoài (ví dụ, CSS, icon,manifest,preload, font).
* \<script\>: Nhúng JavaScript.  
  tag style

  ### **Các thẻ cần biết:**

\<div\> : một thẻ khối (block-level element) được sử dụng để tạo các vùng chứa (containers) cho các phần tử khác trên trang web. ko có định nghĩa cụ thể nó dùng để việc tổ chức và định dạng nội dung.Khối chứa, thường dùng để phân chia nội dung.

ngoài div có thể dùng (semantical):để xác định vùng hiển thị hỗ trợ cho SEO:

\<header\>: Đầu trang.

\<footer\>: Chân trang.

\<nav\>: Thanh điều hướng.

\<article\>: Bài viết độc lập.

\<section\>: Phân đoạn nội dung.

\<aside\>: Nội dung phụ.

các thẻ dùng để hiển thị nội dung:  
\<p\>: Đoạn văn.

\<br\>: Xuống dòng.

\<hr\>: Dòng ngang.

\<strong\>: Làm nổi bật (đậm).

\<em\>: Làm nghiêng văn bản.

\<small\>: Văn bản nhỏ.

\<mark\>: Đánh dấu văn bản. (hight light text)

\<ul\>: Danh sách không thứ tự.

\<ol\>: Danh sách có thứ tự.

\<li\>: Mục trong danh sách.

\<a\>: Tạo liên kết.

\<img\>: Chèn hình ảnh

\<span\>: Thẻ inline, thường dùng để định dạng một phần nhỏ của văn bản.

\<form\>: Tạo biểu mẫu.

\<input\>: Nhập liệu (có nhiều loại như text, password, email, checkbox, radio, v.v.).

\<textarea\>: Khu vực nhập văn bản đa dòng.

\<select\>: Tạo danh sách chọn.

\<button\>: Nút bấm.

### **Các thuộc tính:**

**Class** : Để nhóm các phần tử lại với nhau nhằm áp dụng cùng một kiểu dáng CSS hoặc JavaScript.  
**ID:** Để xác định duy nhất một phần tử trong tài liệu. Mỗi id phải là duy nhất trong một trang.  
Ngoài ra các thuộc tính khác của từng thẻ riêng:  
src, alt, width, height … dùng để set thuộc tính cho thẻ đó

### Những câu hỏi thường gặp về HTML

**Tại sao HTML lại quan trọng đối với phát triển web?**

```
HTML , hay Ngôn ngữ đánh dấu siêu văn bản , là ngôn ngữ đánh dấu chuẩn để tạo và thiết kế các trang web. Hiểu HTML là điều cơ bản đối với bất kỳ ai tham gia phát triển web , vì nó tạo thành xương sống của mọi trang web.
```

**Thẻ HTML là gì và chúng hoạt động như thế nào?**

```
HTML sử dụng thẻ để xác định các thành phần trên trang web. Thẻ được đặt trong dấu ngoặc nhọn (“< >”) và chúng đi theo cặp: thẻ mở và thẻ đóng. Nội dung giữa các thẻ này chỉ định thành phần.
```

**Tôi cần phần mềm nào để học HTML?**

```
Bạn chỉ cần một trình soạn thảo văn bản đơn giản , như Notepad trên Windows hoặc TextEdit trên Mac . Đối với Output, bạn sẽ cần một trình duyệt web , như Chrome, Firefox hoặc Safari.
```

**Sự khác biệt giữa HTML và HTML5 là gì?**

```
HTML5 là phiên bản HTML mới nhất , giới thiệu các thành phần, thuộc tính và API mới giúp tăng cường khả năng phát triển web. Trong khi HTML5 vẫn tương thích với các phiên bản HTML cũ hơn, nó mang đến các tính năng mới như hỗ trợ video và âm thanh gốc, cải thiện xử lý biểu mẫu và ngữ nghĩa nâng cao. Học HTML5 được khuyến nghị để luôn cập nhật các phương pháp phát triển web hiện đại.
```

**Tôi có thể tạo một trang web hoàn chỉnh chỉ bằng HTML không?**

```
Có, bạn có thể xây dựng một trang web đơn giản chỉ bằng HTML, nhưng nó sẽ rất cơ bản. Đối với một trang web hấp dẫn về mặt hình ảnh và tương tác, bạn cũng sẽ cần CSS (để tạo kiểu) và JavaScript (cho các thành phần động). Hãy cân nhắc đến hệ thống quản lý nội dung (CMS) cho các trang web lớn hơn, phức tạp hơn.
```

## **CSS**

### **1. Khái niệm**

**CSS (Cascading Style Sheets)** là ngôn ngữ dùng để định dạng và bố trí các phần tử HTML trên trang web. CSS cho phép bạn kiểm soát trang web bằng cách mô tả nội dung được hiển thị như thế nào bằng các thuộc tính bao gồm màu sắc, font chữ, khoảng cách, kích thước, và nhiều khía cạnh khác của giao diện người dùng. CSS cung cấp cho các nhà phát triển và nhà thiết kế khả năng kiểm soát mạnh mẽ đối với việc trình bày các thành phần HTML.
HTML sử dụng thẻ và CSS sử dụng bộ quy tắc. Các kiểu CSS được áp dụng cho phần tử HTML bằng bộ chọn.

**lưu ý**: CSS không phải là ngôn ngữ lập trình. nó là ngôn ngữ kiểu dáng được sử dụng để định dạng và trang trí cho các phần tử HTML.Là ngôn ngữ kiểu dáng (style sheet language), không có khả năng lập trình như biến, hàm hay cấu trúc điều kiện.
**Cú pháp css:Hiểu cách viết quy tắc CSS, bộ chọn, thuộc tính, và giá trị.**

bộ chọn: [https://www.w3schools.com/cssref/css_selectors.php](https://www.w3schools.com/cssref/css_selectors.php)

**Pseudo-classes** trong CSS là các trạng thái đặc biệt của phần tử mà không thể được chọn bằng các bộ chọn thông thường.

[https://www.w3schools.com/css/css_pseudo_classes.asp](https://www.w3schools.com/css/css_pseudo_classes.asp)

2. ### **syntax**

   CSS được viết dưới dạng các quy tắc (rules) gồm các bộ chọn (selectors) và các thuộc tính (properties) selector {
   property: value;
   }
   **Selector (Chọn): Xác định phần tử HTML mà bạn muốn định dạng**. Ví dụ:

- h1 (chọn tất cả các phần tử \<h1\>)
- .classname (chọn tất cả các phần tử có class "classname")
- \#idname (chọn phần tử có ID "idname")
  **Property (Thuộc Tính): Thuộc tính CSS bạn muốn thay đổi.** Ví dụ:
-
- color (màu sắc)
- font-size (kích thước chữ)
- margin (khoảng cách)
  **Value (Giá Trị): Giá trị cho thuộc tính. Có thể là màu sắc, kích thước, từ khóa, v.v. Ví dụ:**

- red (đỏ)
- 16px (16 pixel)
- 2em (2 em)
  EX:
  h1 {
  color: blue;
  font-size: 24px;
  }
  .button {
  background-color: green;
  padding: 10px 15px;
  }
  \#header {
  margin: 20px;
  text-align: center;
  }

**các cách nhúng css:**

- Inline CSS: Sử dụng thuộc tính style trực tiếp trong thẻ HTML.

\<h1 style="color: blue;"\>Tiêu đề\</h1\>

- Internal CSS: Đặt CSS trong thẻ \<style\> trong phần \<head\> của tài liệu HTML.
  \<style\>
  h1 {
  color: blue;
  }
  \</style\>
- External CSS: Liên kết đến tệp CSS bên ngoài bằng thẻ \<link\>.
  \<link rel="stylesheet" href="styles.css"\>

3. ### **Các thuộc tính cơ bản:**

Các đơn vị trong css: https://www.w3schools.com/CSS/css\_units.asp
khái niệm: **Box Model**: Hiểu khái niệm Box Model trong CSS, bao gồm các phần tử như nội dung \=\> thuộc tính padding, border, và margin.
Thứ tự ưu tiên và ghi đè css \+ \!importion: https://www.w3schools.com/CSS/css\_specificity.asp

Các thuộc tính cơ bản như màu (color), phông chữ (font-family), kích thước (font-size), lề (margin), padding (padding), chiều rộng (width), chiều cao (height), và nền (background).
dùng cho bố cục: Sử dụng thuộc tính display (none, block, gird, flex) cho bố cụ layoyut ([https://www.w3schools.com/cssref/pr_class_display.php](https://www.w3schools.com/cssref/pr_class_display.php)) , position, float, và clear.

CSS Animations và Transitions
advance: responsive là gì? Rule css: @media để reponsive

Các framework css: Bootstrap, Tailwind CSS, Bulma\\

### Câu hỏi thường gặp

**CSS là gì?**

```CSS (Cascading Style Sheets) là ngôn ngữ để định dạng tài liệu HTML hoặc XML, kiểm soát bố cục, màu sắc, phông chữ và giao diện tổng thể nhằm nâng cao trải nghiệm của người dùng.

```

**Tại sao CSS lại quan trọng?**\

```
CSS tách biệt nội dung khỏi thiết kế, cải thiện khả năng truy cập, nâng cao trải nghiệm của người dùng và cung cấp thiết kế đáp ứng cho nhiều thiết bị và kích thước màn hình khác nhau.
```

**Làm thế nào để thêm CSS vào trang web?**

```
CSS nội tuyến(Inline CSS:): Sử dụng thuộc tính style trong HTML.
CSS nội bộ(Internal CSS:): Sử dụng khối <style> trong <head>.
CSS bên ngoài (External CSS: ): Liên kết tệp CSS bằng thẻ <link>.
```

**Cú pháp của CSS là gì?**

```Cú pháp CSS: selector { property: value; }. Bộ chọn nhắm mục tiêu vào các phần tử; thuộc tính xác định các thuộc tính kiểu dáng; giá trị chỉ định chi tiết kiểu dáng.

```

**Bộ chọn CSS là gì?**

```Bộ chọn CSS nhắm mục tiêu vào các phần tử để tạo kiểu. Các loại phổ biến: bộ chọn phần tử, lớp, ID và thuộc tính.

```

**Thuộc tính CSS là gì?**

```Thuộc tính CSS xác định các kiểu như màu sắc, kích thước phông chữ, lề và khoảng đệm. Ví dụ: p { color: blue; }.

```

## **Javascript**

## **1.Khái niệm**

JavaScript là một ngôn ngữ lập trình bậc cao, được sử dụng chủ yếu để tạo ra các trang web động và tương tác. Nó là một phần không thể thiếu trong phát triển web, thường được sử dụng kết hợp với HTML và CSS.

### **Đặc điểm của JavaScript:**

- Ngôn ngữ kịch bản (Scripting Language): JavaScript có thể được nhúng trực tiếp vào các tài liệu HTML, cho phép thực thi mã khi người dùng tương tác với trang.
- Tính động (Dynamic):JavaScript cho phép thay đổi nội dung của trang mà không cần phải tải lại toàn bộ trang, tạo ra trải nghiệm người dùng mượt mà.
- Hướng đối tượng:JavaScript hỗ trợ lập trình hướng đối tượng, cho phép bạn tạo ra các đối tượng và sử dụng kế thừa.
- Tương tác với DOM:JavaScript có thể tương tác với Document Object Model (DOM) của trang, cho phép thay đổi cấu trúc, nội dung và phong cách của các phần tử HTML.
- Tính không đồng bộ:JavaScript hỗ trợ xử lý bất đồng bộ (asynchronous), cho phép thực hiện nhiều tác vụ cùng một lúc mà không làm chậm quá trình tải trang.

  ### **Cách sử dụng JavaScript trên web**

**Nhúng trực tiếp trong HTML**:
\<script\>
alert("Chào mừng đến với trang web của tôi\!");
\</script\>
**Liên kết đến tệp JavaScript bên ngoài**:
\<script src="script.js"\>\</script\>

### **Ứng dụng của JavaScript**

- **Tạo hiệu ứng động**: Như các hiệu ứng cuộn, chuyển đổi giữa các trang hoặc hình ảnh.
- **Xử lý sự kiện**: JavaScript có thể phản hồi lại các hành động của người dùng, như nhấp chuột, nhập dữ liệu, hoặc cuộn trang.
- **Xử lý dữ liệu**: JavaScript có thể gửi và nhận dữ liệu từ máy chủ thông qua AJAX, giúp tạo ra các ứng dụng web một trang (single-page applications).
- **Lập trình máy chủ**: Với sự phát triển của Node.js, JavaScript cũng có thể được sử dụng để phát triển ứng dụng phía máy chủ.

Sự ra đời của javascript:
**Nguyên nhân ra đời**:

- JavaScript được phát triển bởi Brendan Eich tại Netscape với mục tiêu tạo ra một ngôn ngữ lập trình đơn giản và dễ sử dụng để làm cho các trang web trở nên tương tác hơn. Ngôn ngữ này ban đầu được gọi là "Mocha", sau đó đổi tên thành "LiveScript" và cuối cùng là "JavaScript".

**Tên gọi và ảnh hưởng của Java**:

- Tên "JavaScript" được chọn một phần vì sự phổ biến của Java vào thời điểm đó. Netscape muốn thu hút sự chú ý từ các nhà phát triển bằng cách liên kết với Java. Tuy nhiên, JavaScript và Java là hai ngôn ngữ rất khác nhau về cú pháp, cách hoạt động và mô hình lập trình.

**Mô hình đối tượng**:

- JavaScript được thiết kế theo mô hình đối tượng dựa trên nguyên mẫu (prototype-based), không phải dựa trên lớp (class-based) như Java. Điều này có nghĩa là các đối tượng trong JavaScript có thể kế thừa trực tiếp từ các đối tượng khác thông qua liên kết nguyên mẫu, trong khi Java sử dụng cấu trúc lớp và kế thừa lớp.

**Lập trình hàm**:

- JavaScript cũng hỗ trợ lập trình hàm, cho phép người dùng coi hàm như là đối tượng, có thể truyền qua như tham số và trả về từ các hàm khác. Điều này không phải là đặc trưng của Java, nơi mà hàm thường phải nằm trong một lớp.

**Dễ tiếp cận**:

- JavaScript được thiết kế để dễ sử dụng cho lập trình viên không chuyên và có thể tích hợp dễ dàng vào HTML, giúp làm phong phú trải nghiệm người dùng trên web.

### **Synxtax: cú pháp trong js**

các kiểu dữ liệu
Khái niệm về object và array.
varibale : let , const,var
operater: các toán tử \+ ,- ,/, % ,\> ,\< ,\>= ,\<=
điều kiện (if, switch), vòng lặp (for, while).
Cách định nghĩa và gọi hàm.
Cách truy cập và thay đổi các phần tử HTML thông qua Document Object Model (DOM).
Thêm, sửa đổi, xóa phần tử trên trang web.
cách xử lý các sự kiện như click, hover, nhập liệu từ bàn phím.
Cách thực hiện yêu cầu bất đồng bộ để lấy dữ liệu từ server mà không cần tải lại trang

````

```

```

```

```
````
