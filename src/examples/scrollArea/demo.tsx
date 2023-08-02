import { ScrollArea } from '@/components/ScrollArea';
import { Separator } from '@/components/Separator';
import type { FC } from 'react';

const tags = Array.from({ length: 50 }).map(
  (value, index, array) => `v1.2.0-beta.${array.length - index}`
);

export const ScrollAreaDemo: FC = () => (
  <ScrollArea className="h-72 w-48 rounded-md border">
    <div className="p-4">
      <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
      {tags.map((tag) => (
        <>
          <div className="text-sm" key={tag}>
            {tag}
          </div>
          <Separator className="my-2" />
        </>
      ))}
    </div>
  </ScrollArea>
);
