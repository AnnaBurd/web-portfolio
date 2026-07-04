// Reuse the Open Graph image for the Twitter/X card, including its
// generateStaticParams so this route is pre-rendered statically too.
export {
  default,
  alt,
  size,
  contentType,
  generateStaticParams,
  dynamicParams,
} from "./opengraph-image";
