# Config nuxt hybrid render

1. SPA : (ssr: false) Kết xuất phía máy khách là nơi ứng dụng được hiển thị hoàn toàn trong trình duyệt. Máy chủ chỉ gửi lại một lượng HTML tối thiểu chỉ để cung cấp cho ứng dụng Vue thứ gì đó để gắn kết. HTML được phân phát từ trình duyệt KHÔNG chứa nội dung.
2. SSR : Hầu hết các ứng dụng Nuxt mà bạn thấy trong tự nhiên đều được hiển thị phía máy chủ. Điều đó có nghĩa là HTML cho ứng dụng Vue được hiển thị trên máy chủ và sau đó HTML toàn trang được phân phối (nội dung và tất cả) đến trình duyệt.
3. Universal Rendering (SSR + Hydration) : default Thông thường khi bạn nghe về SSR và Nuxt, thường những gì thực sự được nói đến là Universal Rendering. Cách tiếp cận SSR thuần túy được đề cập ở trên khác xa với xu hướng chính thống (dễ hiểu vì gói hỗ trợ nó là thử nghiệm).

Kết xuất phổ quát là sự kết hợp của cả SSR và SPA. Các ứng dụng phổ quát đầu tiên được hiển thị trên máy chủ và sau đó "ngậm nước" trên máy khách. Hydrat hóa là quá trình tiêm ứng dụng Vue.js phía máy khách vào HTML hiển thị máy chủ hiện có.

Đây là chế độ kết xuất mặc định cho Nuxt.

4. SSG: Tạo trang web tĩnh giống như một ứng dụng phổ quát trong đó HTML đầy đủ được phân phối từ máy chủ và sau đó ngậm nước ở phía máy khách. Nơi nó khác nhau là KHI HTML được tạo trên máy chủ. Với universal rendering, nó được tạo ra tại thời điểm yêu cầu. Với kết xuất tĩnh (hay còn gọi là Tạo trang web tĩnh hoặc SSG), nó được tạo trong một bước xây dựng.

5. ISG ( incremetal static generation): Cũng giống như kết xuất phổ quát kết hợp SSR và SPA về NƠI ứng dụng được hiển thị, tạo tĩnh gia tăng (ISG) là sự kết hợp giữa SSG và SSR về KHI ứng dụng được hiển thị. Theo tôi, về cơ bản nó là một bộ nhớ cache được tôn vinh.

Chiến lược bộ nhớ đệm được ISG sử dụng được gọi là SWR hoặc "stale-while-revalidate". Dòng chảy trông như thế này:

Trên yêu cầu đầu tiên của một trang, máy chủ hiển thị nó nhưng cũng lưu trữ HTML được hiển thị
Tất cả các yêu cầu tiếp theo trong một khoảng thời gian xác định sẽ nhận được HTML được lưu trong bộ nhớ cache và máy chủ không xử lý (Khoảng thời gian này là 1 phút trong Nuxt 3 theo mặc định nhưng có thể được định cấu hình)
Sau 1 phút (hoặc bất cứ điều gì), máy chủ vẫn gửi HTML được lưu trong bộ nhớ cache nhưng trong nền sẽ hiển thị lại trang và lưu trữ phiên bản mới trong bộ nhớ cache.
Sau đó, quá trình bắt đầu trở lại ở bước 2 và lặp lại vô thời hạn.
Cách tiếp cận này tránh được một số rào cản bạn gặp phải với SSG trong khi vẫn mang lại cho bạn hiệu suất tuyệt vời như vậy.

6. Hybird rendering: Bây giờ bạn đã biết về tất cả các chế độ kết xuất khác, việc hiểu kết xuất lai khá đơn giản. Kết xuất lai là khả năng kết hợp và kết hợp các phương pháp trên trong một ứng dụng duy nhất dựa trên tuyến đường. [refer](https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering) file nuxt.config.ts:

```
export default defineNuxtConfig({
    routeRules: {
        // Static page generated on-demand, revalidates in background (ISG)
        '/blog/**': { swr: true },

    // Static page generated on-demand once (SSG - or at least mighty close)
    '/articles/**': { static: true },

    // Render these routes on the client (SPA)
    '/admin/**': { ssr: false },

  }
})
```
