import { getProjectsData } from "@/scripts/getProjectsData";
import { Locale } from "../../../i18n/i18n-config";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const projects = getProjectsData(lang);

  // return [{ slug: "project-0" }, { slug: "project-1" }];
  return projects.map((project) => ({ slug: project.slug }));
}

// Dynamic segments with `params` [lang] not supported in `generateStaticParams` will not be dynamically generated at runtime
export const dynamicParams = false;

// Metadata for the page
export async function generateMetadata({ params: { lang, slug } }: Props) {
  if (slug === "real-estate-app") {
    if (lang === "en") {
      return {
        title: "VietLand - Real Estate App · Портфолио Анны",
        description:
          "Explore VietLand, a modern web application designed for a local real estate company. This project showcases the use of performant static Astro components and strategically-integrated React elements, ensuring optimal performance. Developed with a focus on user-friendly design, competitive mobile performance, and cost-effective solutions. Check out the latest work in website development, React, Astro, TypeScript, and Tailwind.",
      };
    }

    if (lang === "vi") {
      return {
        title: "VietLand - Real Estate App · Hồ sơ của Anna",
        description:
          "Khám phá VietLand, ứng dụng web hiện đại được thiết kế cho một công ty bất động sản địa phương. Dự án này trình bày việc sử dụng các thành phần Astro tĩnh hiệu suất và các yếu tố React tích hợp một cách chiến lược, đảm bảo hiệu suất tối ưu. Phát triển với sự tập trung vào thiết kế thân thiện với người dùng, hiệu suất di động cạnh tranh và giải pháp hiệu quả chi phí. Kiểm tra công việc mới nhất trong phát triển trang web, React, Astro, TypeScript và Tailwind.",
      };
    }

    return {
      title: "VietLand - Real Estate App · Anna's portfolio",
      description:
        "Исследуйте VietLand, современное веб-приложение, разработанное для местной компании по недвижимости. Этот проект демонстрирует использование производительных статических компонентов Astro и стратегически интегрированных элементов React, обеспечивая оптимальную производительность. Разработан с учетом дружелюбного дизайна, конкурентоспособной мобильной производительности и экономичных решений. Посмотрите последние работы в области разработки веб-сайтов, React, Astro, TypeScript и Tailwind.",
    };
  }

  if (slug === "translator-app") {
    if (lang === "ru") {
      return {
        title: "AI Translator App · Портфолио Анны",
        description:
          "Исследуйте Geology Specialized AI Translator App - веб-приложение, разработанное для точного перевода технической документации в области нефтегазовой геологии, осведомленного о контексте. Безупречно интегрирует OpenAI/Azure и локальные модели искусственного интеллекта в продвинутую цепочку искусственного интеллекта для производства точных переводов, обеспечивая при этом безопасность данных компании. Дружественный интерфейс пользователя и поддержка форматированных файлов Docx упрощают процесс перевода для пользователей без технических навыков.",
      };
    }

    if (lang === "vi") {
      return {
        title: "AI Translator App · Hồ sơ của Anna",
        description:
          "Khám phá Geology Specialized AI Translator App - ứng dụng web được thiết kế để dịch chính xác tài liệu kỹ thuật trong lĩnh vực địa chất dầu, hiểu biết về bối cảnh. Tích hợp mượt mà OpenAI/Azure và các mô hình AI cục bộ vào một chuỗi AI tiên tiến để tạo ra các bản dịch chính xác trong khi đảm bảo an ninh dữ liệu của công ty. Giao diện thân thiện với người dùng và hỗ trợ các tệp định dạng Docx giúp đơn giản hóa quá trình dịch cho người dùng không có kỹ năng kỹ thuật.",
      };
    }

    return {
      title: "AI Translator App · Anna's portfolio",
      description:
        "Explore the Geology Specialized AI Translator App - a web application designed to accurately translate technical documentation in petroleum geology, context-aware. Seamlessly integrates OpenAI/Azure and local AI models into an advanced AI chain to produce precise translations while ensuring company data security. User-friendly interface and support for formatted Docx files simplify the translation process for non-technical users.",
    };
  }
}

type Props = {
  params: {
    lang: Locale;
    slug: string;
  };
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return children;
}
