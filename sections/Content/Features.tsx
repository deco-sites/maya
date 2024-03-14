import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";

/**
 * @titleBy title
 */
export interface Card {
  title: string;
  text: string;
}

export interface Props {
  title?: string;
  cards: Card[];
  showIconRight?: boolean;
}

function FeatureCard({ title, text }: Card) {
  return (
    <div class="feature-card">
      {title && (
        <Text
          variant="heading-3"
          className="text-primary text-[25px] leading-none"
        >
          {title}
        </Text>
      )}
      <Text variant="body" className="mt-auto">
        {text}
      </Text>
    </div>
  );
}

export default function Features({ title, cards, showIconRight }: Props) {
  return (
    <section class="relative mx-auto w-full py-20 2xl:py-36 lg:pl-24">
      <div class="flex justify-center items-center flex-col ">
        {title && (
          <Text
            variant="heading-3"
            className="text-primary mb-12 lg:mb-[97px] 2xl:mb-[137px]"
          >
            {title}
          </Text>
        )}
        <div class="features scrollbar mb-7 lg:mb-[61px] 2xl:mb-[87px] pl-14 lg:pl-0">
          {cards?.map((card) => <FeatureCard {...card} />)}
        </div>
        {showIconRight && (
          <>
            <Icon
              id="ArrowRight"
              width={90}
              height={15}
              strokeWidth={1}
              className="lg:hidden text-primary ml-auto mr-6"
            />
            <Icon
              id="ArrowRight"
              width={246}
              height={43}
              strokeWidth={1}
              className="hidden lg:block text-primary ml-auto mr-28"
            />
          </>
        )}
      </div>
    </section>
  );
}
