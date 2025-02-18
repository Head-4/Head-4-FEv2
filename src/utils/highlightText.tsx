import styled from "styled-components";

const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

export const highlightText = (text: string, input: string, size: number) => {
    if (!input) return text;
    const escapedInput = escapeRegExp(input);
    const parts = text.split(new RegExp(`(${escapedInput})`, 'gi'));
    return parts.map((part, idx) => (
        part.toLowerCase() === input.toLowerCase()
            ? <HighlightSpan key={idx} $size={size}>{part}</HighlightSpan>
            : part
    ));
};

const HighlightSpan = styled.span<{ $size: number }>`
    color: ${({theme}) => theme.Blue};
    font-weight: ${({$size}) => $size === 16 ? '600' : '700'};
    font-size: ${({$size}) => $size === 16 ? '16px' : '18px'};
`;