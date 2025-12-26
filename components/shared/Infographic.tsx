import Image from "next/image";
import { cn } from "@/lib/utils";

interface InfographicProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export function Infographic({
  src,
  alt,
  caption,
  width,
  height,
  className,
  priority = false,
}: InfographicProps) {
  return (
    <figure className={cn("my-8 md:my-12", className)}>
      <div className="relative w-full overflow-hidden rounded-lg border border-border/40 bg-card/50">
        <Image
          src={src}
          alt={alt}
          width={width || 1200}
          height={height || 800}
          className="h-auto w-full object-contain"
          priority={priority}
        />
      </div>
      {caption && (
        <figcaption className="mt-4 text-center text-sm text-muted-foreground leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
