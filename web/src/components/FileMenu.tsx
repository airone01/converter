import FileMenuItem from "./FileMenuItem";

interface Format {
  snail: string,
  vanity: string,
  icon: 'document' | 'image',
  color: string
}

const formats: Format[] = [
  {
    snail: 'pdf',
    vanity: 'PDF',
    icon: 'document',
    color: '#ff9090'
  },
  {
    snail: 'png',
    vanity: 'PNG',
    icon: 'image',
    color: '#a6c5ff'
  },
]

interface Props {
  layer: 1 | 2
}

export default function FileMenu({ layer }: Props) {
  return (
    <main>
      {
        formats.map((e) => (
          <FileMenuItem layer={layer} snail={e.snail} vanity={e.vanity} icon={e.icon} color={e.color} />
        ))
      }
    </main>
  );
}