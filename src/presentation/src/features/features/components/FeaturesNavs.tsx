import { createSignal, For } from "solid-js";
import { mergeCls } from "~/core/acore-ts/ui/ClassHelpers";
import Icon from "~/presentation/src/shared/components/ui/icons/Icon";

type Tab = {
  heading: string;
  content: string;
  icon: string;
  imageSrc: string;
  imageAlt: string;
};

interface Props {
  title?: string;
  tabs: Tab[];
}

export default function FeaturesNavs(props: Props) {
  const [activeTab, setActiveTab] = createSignal(0);

  const activeTabClass = "bg-neutral-50 shadow-md hover:border-transparent dark:bg-neutral-700/60";
  const activeTabHeadingClass = "text-orange-400 dark:text-orange-300";
  const activeTabContentClass = "text-neutral-600 dark:text-neutral-200";

  return (
    <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">
      <div class="relative p-6 md:p-16">
        <div class="relative z-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-20">
          <div class="mb-10 lg:order-2 lg:col-span-5 lg:col-start-8 lg:mb-0">
            <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-3xl">
              {props.title && <span innerHTML={props.title} />}
            </h2>

            <nav class="mt-5 grid gap-4 md:mt-10" aria-label="Tabs" role="tablist">
              <For each={props.tabs}>
                {(tab, index) => (
                  <button
                    type="button"
                    onClick={() => setActiveTab(index())}
                    class={mergeCls(
                      "rounded-xl p-4 text-start outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-200 focus-visible:ring dark:ring-zinc-200 dark:hover:bg-neutral-700 dark:focus:outline-none md:p-5",
                      activeTab() === index() ? activeTabClass : "",
                    )}
                  >
                    <span class="flex">
                      <Icon name={tab.icon} class="size-12 text-secondary" />
                      <span class="ms-6 grow">
                        <span
                          class={mergeCls(
                            "block text-lg font-bold text-neutral-800 dark:text-neutral-200",
                            activeTab() === index() ? activeTabHeadingClass : "",
                          )}
                        >
                          {tab.heading}
                        </span>
                        <span
                          class={mergeCls(
                            "mt-1 block text-neutral-500 dark:text-neutral-400",
                            activeTab() === index() ? activeTabContentClass : "",
                          )}
                        >
                          {tab.content}
                        </span>
                      </span>
                    </span>
                  </button>
                )}
              </For>
            </nav>
          </div>

          <div class="lg:col-span-7">
            <div class="relative">
              <div class="w-full overflow-hidden rounded-xl">
                <For each={props.tabs}>
                  {(tab, index) => (
                    <img
                      src={tab.imageSrc}
                      alt={tab.imageAlt}
                      class={mergeCls(
                        "aspect-[3/2] rounded-xl object-cover shadow-xl shadow-neutral-200 dark:shadow-neutral-900/[.2] lg:aspect-auto",
                        activeTab() === index() ? "" : "hidden",
                      )}
                      draggable="false"
                    />
                  )}
                </For>
              </div>
            </div>
          </div>
        </div>

        <div class="absolute inset-0 grid h-full w-full grid-cols-12"></div>
        <div class="col-span-full h-5/6 w-full rounded-xl bg-neutral-100 dark:bg-white/[.075] sm:h-3/4 lg:col-span-7 lg:col-start-6 lg:h-full" />
      </div>
    </section>
  );
}
