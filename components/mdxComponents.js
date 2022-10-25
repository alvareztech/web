import Link from "next/link";
import Image from "next/image";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }
  return <a
    className="font-medium"
    target="_blank" rel="noreferrer" {...props} >{props.children}</a>
};

const BlogImg = (props) => {
  return (
    <div className="my-3">
      <Image
        src={props.src}
        alt={props.alt}
        layout="responsive"
        {...props}
        className="rounded-xl"
      />
    </div>
  );
};


const Paragraph = (props) => {
  return (
    <p className="my-4">
      {props.children}
    </p>
  )
}

const ListDisc = (props) => {
  return (
    <ul className="list-disc my-2 pl-5">{props.children}</ul>
  )
}

const ListDecimal = (props) => {
  return (
    <ol className="list-decimal my-2 pl-5">{props.children}</ol>
  )
}

const Blockquote = (props) => {
  return (
    <blockquote>
      <p className="px-4 py-1 italic">
        {props.children}
      </p>
    </blockquote>)
}

const MDXComponent = {
  Image,
  a: CustomLink,
  BlogImg,
  p: Paragraph,
  ul: ListDisc,
  ol: ListDecimal,
  blockquote: Blockquote
};

export default MDXComponent;
