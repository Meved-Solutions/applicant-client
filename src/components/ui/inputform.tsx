import { Input } from "@/components/ui/input"

interface InputFileProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  multiple?: boolean;
}

export function InputFile({ onChange, multiple = false }: InputFileProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Input id="files" type="file" multiple={multiple} onChange={onChange} />
    </div>
  )
}