import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function PageTitle({ fileData, cfg, displayClass }: QuartzComponentProps) {
  const title = cfg?.pageTitle ?? "Untitled Quartz"
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h1 class={`page-title ${displayClass ?? ""}`}>
      <a href={baseDir}>
		<img src="/static/icon.png" />
		{title}
	  </a>
    </h1>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}
.page-title > a > img {
  height: 1.75rem;
  margin: 0;
  margin-right: 0.5rem;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
