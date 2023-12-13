import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import vscDarkPlus from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus";
import remarkGfm from "remark-gfm";

// import rangeParser from "parse-numeric-range";

import Image from "next/image";

import "./markdown.css";
import { CopyButton } from "./CopyButton";

type Props = {
  children: string;
};

const parseRange = (range: string) => {
  return range.split(",").flatMap((n) => {
    if (n.includes("..")) {
      const [start, end] = n.split("..").map(Number);

      return Array.from({ length: end - start + 1 }, (_, i) => i + start);
    }

    return Number(n);
  });
};

const Markdown: React.FC<Props> = ({ children }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
      className={"markdown-body"}
      components={{
        code(props) {
          const { children, className, node, ref, ...rest } = props;

          const match = /language-(\w+)/.exec(className || ""); //TODO: test this regex

          const meta: string | undefined = (node?.data as any)?.meta; // TODO: contribute to OS project to add types ++ types for syntax highlighter (ref)

          let lines: number[] | undefined;

          if (meta) {
            // Parse line numbers from the code block meta, e.g. ```js {3..4,8}
            const range = /\{([\d,..]+)\}/i.exec(meta)?.[0].slice(1, -1); // TODO: test this regex

            if (range) lines = parseRange(range);
          }
          return match ? (
            <div className="relative">
              <div className="absolute top-0 inline-flex w-full justify-between px-4 pt-2 text-white">
                <span>{match[1]}</span>

                <CopyButton textContent={String(children).replace(/\n$/, "")} />
              </div>
              <SyntaxHighlighter
                language={match[1]}
                {...rest}
                PreTag="div"
                showLineNumbers={true}
                lineProps={(lineNumber) =>
                  lines?.includes(lineNumber)
                    ? {
                        style: {
                          backgroundColor: "#2d3748",
                          //   paddingTop: "0.25em",
                          //   paddingBottom: "0.25em",
                        },
                      }
                    : {}
                }
                wrapLongLines={true}
                style={vscDarkPlus}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            </div>
          ) : (
            <code {...rest} ref={ref} className={className}>
              {children}
            </code>
          );
        },
        img(props) {
          // Do not use next/image for external images
          if (props.src?.startsWith("http") || !props.src)
            // eslint-disable-next-line @next/next/no-img-element
            return <img src={props.src} alt={props.alt} />;

          // Parse width and height from the image alt text, e.g. [alt text {100x100}](url)
          const width = props.alt?.match(/(?<={)\d+(?=x)/)?.[0];
          const height = props.alt?.match(/(?<=x)\d+(?=})/)?.[0];

          // Use Next <Image /> to optimize image size
          return (
            <Image
              src={props.src}
              alt={props.alt || "Default alt text"}
              width={width ? parseInt(width) : "600"}
              height={height ? parseInt(height) : "300"}
              title={props.title}
            />
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;
