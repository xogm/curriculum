import React, { memo } from "react";

type TimelineProps = {
  timeline: {
    title: string;
    subtitle: string;
    content?: React.ReactNode;
    date?: string;
  }[];
  orientation?: "vertical" | "horizontal";
};

const TimelineItem = ({
  item,
  isEven,
  isFirst,
  isLast,
}: {
  item: TimelineProps["timeline"][number];
  isEven: boolean;
  isFirst?: boolean;
  isLast?: boolean;
}) => (
  <li className="timeline-item">
    {!isFirst && <hr />}
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className={`timeline-${isEven ? "start" : "end"} timeline-box`}>
      <div className="text-lg">{item.title}</div>
      <div className="font-mono italic">{item.subtitle}</div>
      {item.content && <div>{item.content}</div>}
      {item.date && <div className="font-mono italic">{item.date}</div>}
    </div>
    {!isLast && <hr />}
  </li>
);

const MemoTimelineItem = memo(TimelineItem);

const Timeline = ({ timeline, orientation = "vertical" }: TimelineProps) => (
  <ul className={`timeline max-md:timeline-compact timeline-${orientation}`}>
    {timeline.map((item, index) => (
      <React.Fragment key={index}>
        <MemoTimelineItem
          item={item}
          isEven={index % 2 === 0}
          isFirst={index === 0}
          isLast={index === timeline.length - 1}
        />
      </React.Fragment>
    ))}
  </ul>
);

export default memo(Timeline);
