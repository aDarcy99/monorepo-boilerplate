import { AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes } from 'react';

export type THtmlLabelProps = DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;

export type THtmlDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type THtmlInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type THTMLHeadingProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export type THTMLParagraphProps = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export type THTMLSpanProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

export type THTMLButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

// Table Elements
export type THTMLTableProps = DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement>;

export type THTMLTheadProps = DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;

export type THTMLTbodyProps = DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;

export type THTMLTfootProps = DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;

export type THTMLThProps = DetailedHTMLProps<HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>;

export type THTMLTrProps = DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;

export type THTMLTdProps = DetailedHTMLProps<HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>;

export type THTMLAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;
