/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Database } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DatabaseUpdateFormInputValues = {
    username?: string;
    password?: string;
};
export declare type DatabaseUpdateFormValidationValues = {
    username?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DatabaseUpdateFormOverridesProps = {
    DatabaseUpdateFormGrid?: FormProps<GridProps>;
    username?: FormProps<TextFieldProps>;
    password?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DatabaseUpdateFormProps = React.PropsWithChildren<{
    overrides?: DatabaseUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    database?: Database;
    onSubmit?: (fields: DatabaseUpdateFormInputValues) => DatabaseUpdateFormInputValues;
    onSuccess?: (fields: DatabaseUpdateFormInputValues) => void;
    onError?: (fields: DatabaseUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: DatabaseUpdateFormInputValues) => DatabaseUpdateFormInputValues;
    onValidate?: DatabaseUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DatabaseUpdateForm(props: DatabaseUpdateFormProps): React.ReactElement;
