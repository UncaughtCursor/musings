import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function PageTitle({ fileData, cfg, displayClass }: QuartzComponentProps) {
  const title = cfg?.pageTitle ?? "Untitled Quartz"
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h1 class={`page-title ${displayClass ?? ""}`}>
      <a href={baseDir}>
		<img src={`${baseDir}/static/icon.png`} />
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
  height: 2rem;
  margin: 0;
  margin-right: 0.5rem;
  transform: translateY(12.5%);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
