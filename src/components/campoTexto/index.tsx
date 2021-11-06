import { ContainerTextField, ErrorText, InputText, SectionField, Icon } from './style';

interface Props {
    children?: React.ReactNode;
    error?: boolean;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange: (e: React.FormEvent) => void;
    textError?: string;
}
export default function CampoTexto({
    children,
    error = false,
    type,
    placeholder,
    value,
    textError,
    onChange
}: Props) {

    return (
        <ContainerTextField>
            <SectionField>
                <Icon>{children}</Icon>
                <InputText
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e)}
                    error={error}
                />
            </SectionField>
            {error ? <ErrorText>{textError}</ErrorText> : null}
        </ContainerTextField>
    );
}
