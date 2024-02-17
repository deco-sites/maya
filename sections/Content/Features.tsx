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
        <Text variant="heading-3" className="text-primary">
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
    <section class="relative mx-auto w-full py-20 2xl:py-36 pl-24">
      <div class="flex justify-center items-center flex-col gap-16 2xl:gap-16">
        {title && (
          <Text variant="heading-3" className="text-primary">
            {title}
          </Text>
        )}
        <div class="features scrollbar">
          {cards?.map((card) => <FeatureCard {...card} />)}
        </div>
        {showIconRight && (
          <Icon
            id="ArrowRight"
            width={246}
            height={43}
            strokeWidth={1}
            className="text-primary ml-auto mr-28"
          />
        )}
      </div>
    </section>
  );
}
