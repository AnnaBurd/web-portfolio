---
title: "VietLand - Ứng dụng Bất động sản"
introduction: "Ứng dụng web hiện đại được thiết kế và phát triển cho một công ty bất động sản địa phương. Xây dựng bằng cách sử dụng các thành phần Astro tĩnh hiệu suất cao và các đảo React chiến lược, đảm bảo chi phí thấp thông qua tích hợp mượt mà với Contentful CMS và việc lưu trữ đáng tin cậy trên Netlify."
mainTag: "Dự án mới nhất"
tags:
  - "Phát triển Website"
  - "React"
  - "Astro"
  - "Typescript"
  - "Tailwind"
---

## Mục Tiêu và Yêu Cầu

Mục tiêu chính của dự án này là **hỗ trợ doanh nghiệp địa phương xây dựng mối liên kết mạnh mẽ với khách hàng tiềm năng** và tạo ra ấn tượng đầu tiên nổi bật, từ đó mang lại ưu thế độc đáo trong thị trường cạnh tranh khốc liệt.

Ràng buộc ban đầu mà chúng tôi cần giải quyết:

- Thiết kế thân thiện với người dùng với sự hiểu biết về ngôn ngữ và đặc điểm văn hóa địa phương
- Hiệu suất cạnh tranh trên thiết bị di động
- Quy trình quản lý nội dung mượt mà và không phức tạp
- **Ngân sách hạn chế** 😹

## Phương Pháp Phát Triển

Trong tình huống cụ thể này, phương pháp được chọn là **tạo các trang tĩnh** thay vì phụ thuộc vào client-side hoặc server-side rendering. Client-side rendering đã bị loại bỏ do sự quan trọng được đặt cho hiệu suất trên thiết bị di động và tối ưu hóa công cụ tìm kiếm (SEO). Trong khi đó, ý tưởng về chi tiêu cho việc phát triển/lưu trữ/quản lý phía backend cũng loại bỏ phương pháp server-side rendering. Thay vào việc đầu tư quá mạnh vào cơ sở hạ tầng backend, chúng tôi chọn sử dụng các dịch vụ của hệ thống CMS không có giao diện (với các gói miễn phí hậu hĩnh).

Và, mặc dù trang tĩnh có vẻ ... _**không sinh động**_, nhưng các trang ứng dụng đã được thiết kế sao cho không tạo ra ấn tượng hoàn toàn tĩnh! **Bí mật chính là việc sử dụng các đảo JS tương tác dựa trên thành phần mỗi khi cần thiết**.

## Danh Sách Công Nghệ

Dự án này được phát triển bằng cách chọn một bộ công nghệ và công cụ hiện đại được chọn lọc cẩn thận. Các công nghệ chủ chốt được liệt kê dưới đây. Để xem toàn bộ các phụ thuộc, bao gồm cả các phiên bản chính xác, bạn có thể khám phá chi tiết trong tệp [package.json](https://github.com/AnnaBurd/web-real-estate/blob/main/package.json).

| Tên                                                                                                                                                    | Sử Dụng                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| [![Astro Badge](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff&style=flat-square)](https://astro.build/)                           | Được sử dụng để tạo ra các trang tĩnh, nhấn mạnh vào thời gian tải nhanh và hiệu suất tối ưu.                        |
| [![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat-square)](https://reactjs.org/)                           | Được tích hợp chiến lược để tạo nội dung động và các thành phần tương tác, mang lại trải nghiệm người dùng sôi động. |
| [![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat-square)](https://www.typescriptlang.org/) | Đảm bảo độ tin cậy và khả năng mở rộng của mã nguồn, đóng góp vào sự bảo trì tổng thể của ứng dụng.                  |
| [![Contentful Badge](https://img.shields.io/badge/Contentful-2478CC?logo=contentful&logoColor=fff&style=flat-square)](https://www.contentful.com/)     | Được sử dụng làm hệ thống CMS không giao diện, tạo điều kiện thuận lợi cho việc cập nhật và quản lý nội dung.        |
| [![Figma Badge](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=fff&style=flat-square)](https://www.figma.com/)                         | Được sử dụng cho quy trình thiết kế cộng tác, đảm bảo giao diện người dùng một cách liên kết và hấp dẫn mắt.         |
| [![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat-square)](https://tailwindcss.com/) | Áp dụng để thiết kế mượt mà và đáp ứng, nâng cao chất lượng và khả năng sử dụng toàn diện.                           |
| [![Leaflet Badge](https://img.shields.io/badge/Leaflet-199900?logo=leaflet&logoColor=fff&style=flat-square)](https://leafletjs.com/)                   | Tích hợp cho bản đồ tương tác, làm tăng trải nghiệm người dùng và cung cấp thông tin quan trọng dựa trên vị trí.     |

## Thách Thức và Giải Pháp

Hành trình đưa dự án này vào hoạt động đã đối mặt với một loạt thách thức. Thực hiện chiến lược [chia để trị](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm), tôi đã giải quyết mỗi vấn đề một cách hệ thống, đáp ứng yêu cầu của dự án trong khi tuân thủ ngân sách và hạn chế thời gian. Theo quan điểm của tôi, nhiều thách thức mang lại nhiều cơ hội cho sự đổi mới và cải tiến — mỗi rào cản trở thành một bước tiến đến sự phát triển tổng thể và xuất sắc.

> Thách Thức 1: Thiết Kế Thân Thiện với Người Dùng

Làm bước đầu tiên, tôi thực hiện một **phân tích sâu rộng về các giải pháp thị trường địa phương hàng đầu**, bao gồm [batdongan], [nhatot], và [alonhadat] để xác định các tính năng chung mà người dùng địa phương đã quen thuộc. Tất cả các nền tảng này đều trình bày các danh sách chi tiết về các mục hàng đang bán, kèm theo hình ảnh và các thông tin cần thiết như giá, diện tích, và địa chỉ. Ngoài ra, chúng cung cấp bộ lọc tiên tiến cho việc tìm kiếm cá nhân:

![batdongan - trang danh sách ](/images/work/real-estate-app/examples/ex1-listing.png "batdongan - trang danh sách")
![nhatot - trang danh sách ](/images/work/real-estate-app/examples/ex2-listing.png "nhatot - trang danh sách")
![alonhadat - trang danh sách ](/images/work/real-estate-app/examples/ex3-listing.png "alonhadat - trang danh sách")

Trong khi cấu trúc của các trang danh sách khá tương đồng trên các nền tảng, các trang chính thể hiện sự biến động, mỗi trang chứa thông tin quan trọng về địa điểm giao dịch, một số mục tiêu nổi bật, và các liên kết điều hướng khác nhau.

Trong giai đoạn [thiết kế mẫu](https://www.figma.com/file/K40aNBOOoKdEaAuXSuK0UF/Panorama?type=design&node-id=270-6&mode=design), tập trung vào **bảo toàn những yếu tố chung này để đảm bảo bố cục thông tin và điều hướng tự nhiên cho người dùng**. Những mẫu wireframe ban đầu này đã là bức tranh để tích hợp các yếu tố thiết kế hiện đại và tính năng, lấy cảm hứng từ các nền tảng như Dribbble. Những cải tiến đáng chú ý bao gồm một bản đồ tùy chỉnh và các tính năng được yêu cầu bởi khách hàng, như một thanh trượt giới thiệu các mục được quảng cáo.

Thiết kế trở thành một thách thức chính của dự án, nó mất nhiều thời gian nhất, với một loạt các lựa chọn xuất hiện theo thời gian:

- [phiên bản đầu tiên](https://ssg-web-app.netlify.app/)
- [phiên bản thứ hai _(đáp ứng)_](https://ssg-web-responsive.netlify.app/)
- [phiên bản thứ ba _(thiết kế đổi mới)_](https://v1.viet-land.vn/), hiện đang chạy với tên **v1**

Ngay cả phiên bản này cũng chưa phải là phiên bản cuối cùng. Số liệu thống kê sử dụng và hành vi thực tế của người truy cập cho thấy **ý tưởng chính có thể được truyền tải rõ ràng và thuyết phục hơn**. Quá trình suy nghĩ lại đó đã phát triển thành một thiết kế hoàn toàn mới — chính là phiên bản hiện tại, đang chạy với tên **[v2](https://viet-land.vn/)**.

**Figma**, một công cụ thiết kế, tăng tốc quá trình biến ý tưởng thành **phiên bản xem trước trực tiếp**, khả năng prototyping nhanh của nó đóng một vai trò quan trọng trong việc cải thiện **vòng phản hồi với khách hàng**, đảm bảo rằng khách hàng được thông tin đầy đủ về tiến triển của quá trình phát triển và thúc đẩy quyết định cộng tác và thông tin.

> Thách Thức 2: Hiệu Suất Cạnh Tranh Trên Thiết Bị Di Động

Với [hơn 86% lưu lượng internet](https://www.statista.com/statistics/804083/share-of-internet-traffic-by-device-vietnam/#:~:text=Distribution%20of%20internet%20traffic%20in%20Vietnam%20November%202022%2C%20by%20device&text=As%20of%20November%202022%2C%2086.58,and%20desktop%20computers%20that%20year.) tại thị trường địa phương được tạo ra thông qua điện thoại di động, tối ưu hóa cho thiết bị di động trở thành một yêu cầu quan trọng cho dự án.

Để giải quyết thách thức này, tôi đã sử dụng một phương pháp hai chiều. Đầu tiên, tôi đã sử dụng **trang tĩnh được tạo ra với Astro**, đảm bảo **độ trễ tối thiểu cho việc tạo mã** trên cả phía máy chủ và trình duyệt. Đồng thời, chiến lược thiết kế **di động trước** đã được triển khai bằng cách sử dụng **Tailwind**. Mỗi thành phần được phát triển ban đầu cho trang di động và sau đó được điều chỉnh khi cần thiết cho màn hình lớn thông qua các truy vấn phương tiện Tailwind tiêu chuẩn.

![xem trước trên các kích thước màn hình khác nhau](/images/work/real-estate-app/responsive-mockup.png "xem trước trên các kích thước màn hình khác nhau")

Về mặt tối ưu hóa thiết kế, quan trọng là nên đề cập đến **tối ưu hóa hình ảnh**. Hình ảnh đã được điều chỉnh cẩn thận cho các kích thước màn hình khác nhau, nhờ **Contentful Image API**.

![điểm hiệu suất lighthouse cho thiết bị di động {300x100}](/images/work/real-estate-app/lighthouse-score.jpg "điểm hiệu suất lighthouse cho thiết bị di động")

Kết quả tổng thể, ngay cả mà không có thêm tối ưu hóa nào khác, là một ứng dụng web có giao diện hấp dẫn trên nhiều thiết bị và cũng mang lại hiệu suất tối ưu. Phương pháp chiến lược này thành công đáp ứng nhu cầu cao về tính di động ở thị trường địa phương.

> Thách Thức 3: Quá Trình Giao Tiếp Mượt Mà và Quản Lý Nội Dung Không Phức Tạp

Trong hành trình tìm hiểu cách đảm bảo quá trình giao tiếp nội dung mượt mà và một trải nghiệm quản lý nội dung không phức tạp, tôi đã khám phá các nền tảng xây dựng trang web phổ biến như [WordPress](https://wordpress.org/), [Joomla](https://www.joomla.org/), và [Shopify](https://www.shopify.com/). Sự phổ biến rộng rãi của những nền tảng này được đặt ra, giữa những yếu tố khác, là do **yêu cầu kỹ thuật tối thiểu** của chúng. Người dùng có thể dễ dàng quản lý nội dung bằng cách nhập dữ liệu vào các trường tương ứng, nhấn `submit` hoặc `publish`, và ngay lập tức xem trang web được cập nhật.

Dự án này hướng đến một **trải nghiệm quản lý nội dung tương tự mà không cần một phần frontend nặng nề**. Trong số các lựa chọn CMS không giao diện, **Contentful** nổi bật là sự lựa chọn tối ưu, vượt trội về trải nghiệm người dùng và xem xét ngân sách. Trong khi các cấu hình ban đầu đòi hỏi ít nhất là một hiểu biết cơ bản về các khái niệm cơ sở dữ liệu và kiểu dữ liệu, các cập nhật dữ liệu sau đó ở chế độ quản lý nội dung trở nên đơn giản như việc điền thông tin vào các biểu mẫu web, bao gồm cả văn bản phong phú.

![biên tập nội dung](/images/work/real-estate-app/content-editor.jpg "biên tập nội dung")

Các quản lý nội dung được chỉ định có thể dễ dàng cập nhật nội dung trang web và xem trước kết quả gần như ngay lập tức trên trang web, phản ánh tính thân thiện với người dùng của các nền tảng CMS truyền thống.

> Thách Thức 4: Ngân Sách Hạn Chế

Giải pháp cho thách thức ngân sách liên quan đến việc tận dụng các gói miễn phí hậu hĩnh của các công nghệ được chọn. Phương pháp này cho phép phát triển và giao hàng một sản phẩm chất lượng cao trong các ràng buộc ngân sách tối thiểu, đồng thời bảo toàn tiềm năng lớn cho khả năng mở rộng trong tương lai.

## Những Kinh Nghiệm Quan Trọng 🍬

Trong tương lai, dự án đã thành công củng cố sự hiện diện trực tuyến của một doanh nghiệp bất động sản địa phương, đảm bảo được các hợp đồng mới và tạo ấn tượng tích cực với khách hàng tiềm năng. Những bài học quý báu bao gồm sự quan trọng của ưu tiên chính xác và sự tương tác tích cực với khách hàng. Đối diện với tương lai, việc giải quyết các vấn đề nhỏ và triển khai các bài kiểm tra đứng là những ưu tiên chính để đảm bảo sự ổn định và đáng tin cậy trong sự phát triển của dự án.

### Kết Quả Đạt Được

Dự án **đã thành công xây dựng sự hiện diện mạnh mẽ trực tuyến cho doanh nghiệp bất động sản địa phương**, tạo ra các mối kết nối có ý nghĩa với khách hàng và vượt qua các hạn chế về ngân sách. Trong khi công việc phát triển tiếp tục để giải quyết các yêu cầu mới nổi lên, dự án đã mang lại kết quả kinh doanh đáng kể. Ít nhất có năm khách hàng tiềm năng đã bày tỏ 'ấn tượng với giao diện chuyên nghiệp của trang web' và đang tích cực xem xét hợp tác. Hơn nữa, **một hợp đồng mới đã được ký kết 🥂, với trang web đóng vai trò quan trọng trong sự đại diện ban đầu cho một lô đất**. Tổng thể, tôi cảm thấy khá hạnh phúc với những mục tiêu đã đạt được.

### Những Bài Học Đã Học

Là một nhà phát triển của dự án này, tôi đã thu được những hiểu biết quý báu, trong đó có **sự quan trọng của việc xác định ưu tiên một cách chính xác và tích cực tham gia vào chu kỳ phản hồi với khách hàng**. Một số tính năng, đòi hỏi thời gian và công sức đáng kể để triển khai, cuối cùng trở thành lãng phí thời gian, dẫn đến việc loại bỏ các phần trang web toàn bộ được coi là 'không liên quan đến kinh doanh.' Đồng thời, yêu cầu kinh doanh không ngờ đòi hỏi sự làm lại bổ sung. Với một chiến lược lập kế hoạch tốt hơn, có tiềm năng giảm đáng kể 20% thời gian phát triển. Trải nghiệm này làm nổi bật **tính động của yêu cầu dự án** và làm nổi bật tầm quan trọng của giao tiếp hiệu quả và kế hoạch linh hoạt để đạt được kết quả tối ưu.

### Kế Hoạch Tương Lai

Công việc trên dự án đang tiếp tục, với trọng tâm chính là giải quyết các vấn đề nhỏ, như trình chiếu hình ảnh di động hoặc khả năng truy cập. Một tính năng mà tôi đã chủ định bỏ qua khi làm việc một mình là các bài kiểm tra. Tuy nhiên, nhìn lại, tôi hiện nhận ra rằng **khi dự án phát triển, thậm chí những thay đổi nhỏ cũng có thể ảnh hưởng đến các tính năng đã triển khai trước đó**. Mà không có bảo vệ nào trên PR merge, tôi thấy mình phải thực hiện kiểm tra thủ công trên mỗi cập nhật hoặc chờ đợi báo cáo lỗi 🫣. Do đó, **việc triển khai các bài kiểm tra đã trở thành tính năng quan trọng tiếp theo trên đường chân trời để cải thiện sự ổn định của dự án và duy trì quy trình phát triển đáng tin cậy**.
