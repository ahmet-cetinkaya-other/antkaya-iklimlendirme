import { For } from "solid-js";
import { mergeCls } from "~/core/acore-ts/ui/ClassHelpers";
import { Icons, type SvgPath } from "./icons.ts";

type Props = {
  name: keyof typeof Icons;
  class?: string;
};

function Icon(props: Props) {
  const icon = (Icons as any)[props.name] || {};
  const paths: SvgPath[] = icon.paths || [];

  return (
    <>
      {icon ? (
        <svg
          class={mergeCls(icon.class, props.class)}
          height={icon.height}
          viewBox={icon.viewBox}
          width={icon.width}
          fill={icon.fill}
          clip-rule={icon["clip-rule"]}
          fill-rule={icon["fill-rule"]}
          stroke={icon.stroke}
          stroke-width={icon.strokeWidth}
          stroke-linecap={icon.strokeLinecap}
          stroke-linejoin={icon.strokeLinejoin}
        >
          <title>{icon.title}</title>
          <For each={paths}>
            {(path: SvgPath) => (
              <path
                d={path.d}
                class={path.class || ""}
                fill={path.fill}
                fill-rule={path.fillRule}
                clip-rule={path.clipRule}
                stroke={path.stroke}
                stroke-miterlimit={path.strokeMiterlimit}
                stroke-width={path.strokeWidth}
                stroke-linecap={path.strokeLinecap}
                stroke-linejoin={path.strokeLinejoin}
              />
            )}
          </For>
        </svg>
      ) : (
        "Icon not found"
      )}
    </>
  );
}

export default Icon;
