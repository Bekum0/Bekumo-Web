/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DatabaseCreateFormInputValues = {
    username?: string;
    password?: string;
};
export declare type DatabaseCreateFormValidationValues = {
    username?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DatabaseCreateFormOverridesProps = {
    DatabaseCreateFormGrid?: FormProps<GridProps>;
    username?: FormProps<TextFieldProps>;
    password?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DatabaseCreateFormProps = React.PropsWithChildren<{
    overrides?: DatabaseCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DatabaseCreateFormInputValues) => DatabaseCreateFormInputValues;
    onSuccess?: (fields: DatabaseCreateFormInputValues) => void;
    onError?: (fields: DatabaseCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: DatabaseCreateFormInputValues) => DatabaseCreateFormInputValues;
    onValidate?: DatabaseCreateFormValidationValues;
} & React.CSSProperties>;
export default function DatabaseCreateForm(props: DatabaseCreateFormProps): React.ReactElement;
