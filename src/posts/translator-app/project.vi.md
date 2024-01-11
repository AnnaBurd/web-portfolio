---
title: "Ứng dụng Dịch Thuật AI Chuyên Ngành Địa Chất"
introduction: "Ứng dụng web được sử dụng để dịch tài liệu kỹ thuật trong lĩnh vực dầu khí, có khả năng hiểu bản chất của ngữ cảnh. Tích hợp mượt mà các mô hình AI của OpenAI/Azure và mô hình AI cục bộ vào một chuỗi AI tiên tiến để tạo ra các bản dịch chính xác trong khi đảm bảo an toàn dữ liệu của công ty. Giao diện thân thiện với người dùng và hỗ trợ cho các tệp Docx được định dạng giúp đơn giản hóa quá trình dịch cho người dùng không chuyên ngành."
mainTag: công việc mới nhất
tags:
  - Ứng dụng Web
  - React
  - Node
  - OpenAI
  - LangChain
  - Azure
  - Typescript
  - Tailwind
---

[logo]: https://raw.githubusercontent.com/AnnaBurd/translator-app-ts-front/492b9d9e7c1deacd02e615f8c5ffb2988676da7e/public/icon.svg "Translator App Logo"

## Giới Thiệu

Ứng dụng dịch thuật là một công cụ quan trọng đối với doanh nghiệp cần các bản dịch chính xác cho tài liệu kỹ thuật. Trong khi các công cụ dịch văn bản phổ biến như Google Translate và các giải pháp dựa trên học sâu của doanh nghiệp thường hiệu quả cho các chủ đề giao tiếp thông thường, chúng thường không đáp ứng được khi xử lý các ngôn ngữ ít phổ biến hoặc thuật ngữ chuyên sâu.

Ví dụ, công ty quốc tế song ngữ mà ứng dụng được thiết kế ban đầu đòi hỏi tất cả các tài liệu kỹ thuật phải được cung cấp cả bằng tiếng Nga và tiếng Việt. Thật không may, các công cụ dịch hiện tại thường tạo ra các đoạn văn không đọc được do sự hạn chế về thuật ngữ chuyên sâu. Điều này dẫn đến việc cần một lượng công việc thủ công đáng kể đối với nhiệm vụ mà nên làm tự động.

Để giải quyết vấn đề này, chúng tôi đã phát triển một ứng dụng được trang bị trí tuệ nhân tạo, được thiết kế đặc biệt để cải thiện độ chính xác của các bản dịch bằng cách sử dụng cơ sở dữ liệu riêng với các mẫu có sẵn từ nhiều lĩnh vực và ngành công nghiệp khác nhau. Bằng cách làm như vậy, chúng tôi có thể cải thiện đáng kể hiệu suất đồng thời giảm chi phí liên quan đến việc sửa lỗi thủ công - từ đó cung cấp dịch vụ chất lượng cao hơn!

## Mục Tiêu và Yêu Cầu

Mục tiêu chính của dự án này là tăng cường hiệu suất của doanh nghiệp chung bằng cách **tăng tốc quá trình dịch tài liệu công ty tốn sức lao động, đồng thời hỗ trợ và mang lại lợi ích cho nhân viên**.

Yêu cầu Ban Đầu Quan trọng:

- Đạt được **bản dịch chính xác** ✅, đảm bảo sự chính xác trong thuật ngữ cụ thể của công ty trong lĩnh vực địa chất dầu khí.
- Triển khai các biện pháp vững chắc để đảm bảo **an ninh dữ liệu của công ty** 🔏 trong suốt quá trình dịch.
- Cho phép dịch **tài liệu định dạng Docx**, bảo tồn cấu trúc và bố cục ban đầu của tài liệu kỹ thuật.
- Phát triển một giao diện người dùng **đơn giản và trực quan** để hỗ trợ việc điều hướng và thao tác dễ dàng cho tất cả người dùng, không phụ thuộc vào chuyên môn kỹ thuật.
- Triển khai một hệ thống toàn diện quản lý người dùng và token, đảm bảo quản lý hiệu quả và **kiểm soát quyền truy cập và phân quyền** 🛂.

## Các Tính Năng Chính

Dự án này tích hợp nhiều yếu tố quan trọng cùng tạo ra một giải pháp mạnh mẽ và chất lượng cao phù hợp cho mục đích thương mại.

1. **Bộ Dữ Liệu Riêng Tư:** Truy cập độc quyền vào một bộ dữ liệu dịch được chọn lọc lưu trữ trong một cơ sở dữ liệu vector.
2. **Bảo Mật Mạnh Mẽ:** Xác thực dựa trên JWT và quyền ủy quyền cụ thể đảm bảo bảo mật mạnh mẽ.
3. **Hồ Sơ Người Dùng Thân Thiện:** Hồ sơ người dùng toàn diện với tính năng đặt lại mật khẩu dễ dàng và quản lý thông tin cá nhân.
4. **Thông Báo Tự Động:** Thông báo email tự động tối ưu hóa giao tiếp và tương tác người dùng.
5. **Triển Khai Bằng Container:** Thiết lập Docker container để triển khai mượt mà trong bất kỳ môi trường nào.
6. **Thiết Kế Ưu Tiên Mobile:** Thiết kế đáp ứng ưu tiên cho di động với các hiệu ứng mượt mà để tăng trải nghiệm người dùng.
7. **Dịch Bằng Một Nhấp Chuột:** Trải nghiệm dịch một nhấp chuột tinh tế để đơn giản hóa và làm thân thiện với người dùng.
8. **Dịch .docx Bảo Tồn Định Dạng:** Dịch tài liệu .docx mà không mất định dạng hoặc cấu trúc ban đầu.
9. **Quản Lý Dựa Trên Vai Trò:** Quản lý người dùng hiệu quả thông qua hệ thống quản lý dựa trên vai trò đơn giản.

## Danh Sách Công Nghệ

Dự án này đã được phát triển thông qua việc chọn lọc một bộ công nghệ và công cụ hiện đại một cách cẩn thận. Dưới đây là các công nghệ quan trọng. Để xem đầy đủ các phụ thuộc, bao gồm các phiên bản cụ thể, bạn có thể xem chi tiết trong tệp [package.json](https://github.com/AnnaBurd/translator-app-ts-front/blob/main/package.json) cho phần frontend và trong tệp [package.json](https://github.com/AnnaBurd/translator-app-ts-api/blob/main/package.json) cho phần backend.

### Backend:

| Tên                                                                                                                                                                 | Sử Dụng                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat-square)](https://www.typescriptlang.org/)              | Nâng cao chất lượng và dễ bảo trì mã nguồn thông qua việc thêm kiểu tĩnh cho JavaScript.                                                         |
| [![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat-square)](https://nodejs.org/)                                    | Dùng như một môi trường chạy mã nguồn JavaScript phía server, hỗ trợ ứng dụng có hiệu suất cao và khả năng mở rộng.                              |
| [![Express Badge](https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat-square)](https://expressjs.com/)                                   | Giúp đơn giản hóa quá trình xây dựng ứng dụng web mạnh mẽ và có khả năng mở rộng thông qua một framework linh hoạt của Node.js.                  |
| [![JSON Web Tokens Badge](https://img.shields.io/badge/JSON%20Web%20Tokens-000?logo=jsonwebtokens&logoColor=fff&style=flat-square)](https://jwt.io/)                | Cung cấp một cách gọn nhẹ và an toàn trên URL để biểu diễn các yêu cầu, thường được sử dụng cho việc xác thực và trao đổi thông tin an toàn.     |
| [![MongoDB Badge](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=flat-square)](https://www.mongodb.com/)                              | Cung cấp hiệu suất cao, khả năng mở rộng và tính linh hoạt trong xử lý lượng lớn dữ liệu thông qua việc sử dụng cơ sở dữ liệu NoSQL.             |
| [![Mongoose Badge](https://img.shields.io/badge/Mongoose-F04D35?logo=mongoosedotws&logoColor=fff&style=flat-square)](https://mongoosejs.com/)                       | Đơn giản hóa việc tương tác với cơ sở dữ liệu MongoDB thông qua một bộ mô hình đối tượng MongoDB lịch sự cho Node.js.                            |
| [![TensorFlow Badge](https://img.shields.io/badge/TensorFlow-FF6F00?logo=tensorflow&logoColor=fff&style=flat-square)](https://www.tensorflow.org/)                  | Hỗ trợ phát triển và huấn luyện các mô hình học sâu thông qua một framework học máy mã nguồn mở.                                                 |
| [![Microsoft Azure Badge](https://img.shields.io/badge/Microsoft%20Azure-0078D4?logo=microsoftazure&logoColor=fff&style=flat-square)](https://azure.microsoft.com/) | Cung cấp một nền tảng điện toán đám mây với nhiều dịch vụ, bao gồm công suất xử lý, lưu trữ và phân tích, để xây dựng và triển khai ứng dụng.    |
| [![Docker Badge](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff&style=flat-square)](https://www.docker.com/)                                  | Tự động hóa quá trình triển khai, mở rộng và quản lý ứng dụng trong các container thông qua một nền tảng được thiết kế để hiệu quả và đồng nhất. |
| [![Postman Badge](https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=fff&style=flat-square)](https://www.postman.com/)                              | Đơn giản hóa quá trình kiểm thử và quản lý APIs thông qua một nền tảng hợp tác cho phát triển APIs.                                              |
| [![Swagger Badge](https://img.shields.io/badge/Swagger-85EA2D?logo=swagger&logoColor=000&style=flat-square)](https://swagger.io/)                                   | Cung cấp một bộ công cụ để thiết kế, xây dựng và tài liệu hóa các APIs RESTful, đảm bảo tính nhất quán và dễ sử dụng.                            |

### Frontend:

| Tên                                                                                                                                                    | Sử Dụng                                                                                                                          |
| :----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat-square)](https://www.typescriptlang.org/) | Nâng cao cấu trúc và khả năng bảo trì của mã nguồn front-end thông qua việc cung cấp kiểu tĩnh.                                  |
| [![Vite Badge](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=flat-square)](https://vitejs.dev/)                               | Làm nhiệm vụ là công cụ xây dựng web dev nhanh, có quan điểm để cung cấp trải nghiệm phát triển nhanh hơn và nhẹ nhàng hơn.      |
| [![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat-square)](https://reactjs.org/)                           | Là một thư viện JavaScript để xây dựng giao diện người dùng, cung cấp cách làm khai báo và hiệu quả để tạo giao diện tương tác.  |
| [![Chart.js Badge](https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs&logoColor=fff&style=flat-square)](https://www.chartjs.org/)            | Cung cấp một thư viện biểu đồ JavaScript đơn giản nhưng linh hoạt để thiết kế và phát triển biểu đồ tương tác.                   |
| [![Figma Badge](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=fff&style=flat-square)](https://www.figma.com/)                         | Được sử dụng như một công cụ thiết kế trực tuyến để tạo các thiết kế và mô hình UI/UX cộng tác.                                  |
| [![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat-square)](https://tailwindcss.com/) | Được áp dụng như một framework CSS hữu ích giúp đơn giản hóa quá trình thiết kế và phát triển giao diện web hiện đại và đáp ứng. |

## Thách Thức và Giải Pháp

Không thể phủ nhận rằng, dự án này đặt ra một thách thức lớn đối với tôi, đặc biệt là ở những lĩnh vực thiếu hướng dẫn từ các bài giảng, tài liệu, Stack Overflow, hoặc thảo luận trên GitHub. Tuy nhiên, việc phải tự mình tìm giải pháp và nhanh chóng thích ứng với công nghệ mới đã làm cho dự án này trở nên rất hấp dẫn để làm việc!

**Khó khăn chính là đảm bảo chất lượng và độ chính xác tối đa trong các bản dịch**. Điều này **phân biệt dự án từ các đối thủ cạnh tranh**. Do đó, tôi tiếp tục đầu tư thời gian và công sức để thử nghiệm và cải tiến nó, mặc dù đã triển khai nhiều ý tưởng.

> Thách Thức 1: Chất lượng bản dịch

Một cách chung để cải thiện đầu ra của mô hình AI là cung cấp ví dụ phù hợp. Vì vậy, tôi bắt đầu bằng cách **tổng hợp một bộ dữ liệu lớn các mẫu dịch**, tất cả liên quan đến địa chất và được viết bằng tiếng Nga-Việt. Việc thu thập dữ liệu khá phức tạp do sự không nhất quán trong các nguồn thông tin có sẵn, cả về cách thông tin được định dạng và nó chứa những gì. Tôi đã sử dụng các macro VBA và kịch bản JS để tự động hóa quá trình, nhưng công việc thủ công vẫn quan trọng trong quy trình làm sạch dữ liệu.

Thứ hai, tôi đã thử nghiệm rộng rãi với **các cấu trúc yêu cầu khác nhau, độ dài ngữ cảnh và cài đặt mô hình khác nhau**. Sự tập trung là tối ưu hóa **hiệu suất ứng dụng từ khía cạnh tỷ lệ giá/chất lượng**.

> Thách Thức 2: Đường cong học cao cho các công nghệ mới nổi và thiếu tài liệu

Sự tò mò của tôi mở rộng đến việc hiểu biết về những chi tiết phức tạp của toàn bộ quá trình, từ việc khởi động `npm run dev` xuống đến hành trình của các bit dữ liệu qua phần cứng và kết nối Wi-Fi. Nhưng trong khi bằng cấp khoa học máy tính đặt nền tảng vững chắc, nó không bao gồm những tiến bộ công nghệ mới nhất. Vì vậy, để đối mặt với dự án này, tôi dành hàng đêm xem hướng dẫn, đọc tài liệu, và nghiên cứu sâu về cách làm việc của các mô hình AI và các công cụ tiên tiến như Langchain. Và thực sự rất thú vị — kiểm tra một trong những nguồn kiến thức lý thuyết của tôi, [StatQuest with Josh Starmer](https://www.youtube.com/user/joshstarmer).

Nói chung, việc tiếp cận một cách chủ động bằng cách thử nghiệm, lặp lại các ý tưởng và hợp tác với cộng đồng tập trung vào các công nghệ mới nổi đã giúp tôi đạt được những hiểu biết quý báu và chia sẻ kiến thức. Học tự học đóng một vai trò quan trọng trong việc bổ sung mọi khoảng trống trong hiểu biết của tôi và giải quyết một cách hiệu quả những vấn đề phức tạp.

## Những Kinh Nghiệm Quan Trọng 🍬

Mặc dù ban đầu được xem xét như một tính năng thử nghiệm trong giai đoạn bùng nổ của Trí tuệ nhân tạo, Ứng dụng Dịch Máy Học đã phát triển thành một dự án mang lại kết quả ấn tượng và triển vọng hứa hẹn trong lĩnh vực chuyên môn của mình.

### Kết Quả Đạt Được

Trong vòng ba tháng sử dụng đầu tiên, ứng dụng đã thu hút sự chú ý đáng kể, đăng ký một lượng token API Azure trung bình mỗi tháng là 2,000,000. Chỉ số này đang tăng lên, làm nổi bật sự áp dụng ngày càng tăng của ứng dụng khi ngày càng có nhiều nhân viên tích hợp nó vào công việc hàng ngày của họ.

Phản hồi tích cực từ người dùng đã nhấn mạnh sự hữu ích của ứng dụng, với nhân viên báo cáo giảm tới 80% thời gian cần thiết cho các nhiệm vụ dịch tài liệu.

Việc sử dụng API chiếm một phần đáng kể chi phí hoạt động của ứng dụng. Những chi phí này được giảm thiểu xuống còn 8 USD hoặc 200,000 VND mỗi tháng. Kết quả tổng cộng cho thấy một **giảm chi phí hơn năm lần cho việc dịch tài liệu**, một lợi ích kinh tế đáng kể của ứng dụng.

### Bài Học Rút Ra

Một bài học chính từ hành trình phát triển dự án này là nhấn mạnh **tầm quan trọng của việc có tài liệu toàn diện**. Tài liệu rõ ràng và được cập nhật đóng vai trò như một nguồn sáng hướng dẫn trong giai đoạn bảo trì, đặc biệt là trong ngữ cảnh của các dự án với nhiều tính năng.

Một kinh nghiệm rút ra quan trọng khác là **vai trò cần thiết của ước tính kinh tế trước khi thực hiện các dự án thương mại**. Mặc dù ham muốn phát triển ngay lập tức rất mạnh mẽ, nhưng một đánh giá cẩn thận về tác động kinh tế là quan trọng. Trong dự án này, nơi các cuộc gọi API mang theo chi phí, ước tính ban đầu đã đóng một vai trò quan trọng trong việc phân phối nguồn lực một cách sáng tạo và tuân theo ngân sách. Phương pháp tỉ mỉ cuối cùng chứng minh rằng dự án là hiệu quả chi phí thông qua kết quả cuối cùng.

### Kế Hoạch Tương Lai

Với trọng tâm chính là nâng cao chất lượng dịch, kế hoạch ngắn hạn bao gồm việc mở rộng bộ dữ liệu dịch với một loạt rộng lớn hơn của tài liệu kỹ thuật. Đồng thời, các thử nghiệm liên tục với các mô hình AI đa dạng nhằm nâng cao độ chính xác và độ chính xác và giảm chi phí.

Tiếp cận tập trung vào người dùng vẫn là ưu tiên hàng đầu, với kế hoạch triển khai các tính năng cho phép chỉnh sửa dịch thủ công để điều chỉnh dịch theo nhu cầu và sở thích cụ thể. Đối với danh sách đầy đủ các tính năng sắp tới, vui lòng xem [lộ trình của dự án](https://github.com/AnnaBurd/translator-app-ts-front?tab=readme-ov-file#roadmap).
