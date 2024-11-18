import React from "react";
import Input from "./Input";
import Label from "./Label";

export default function InputLabel(props) {
    const {htmlFor, label, type, id, placeholder, value, onChange, className} = props

    return (
        <div className="mb-4">
            <Label htmlFor={htmlFor}>{label}</Label>
            <Input type={type} id={id} placeholder={placeholder} value={value} onChange={onChange}className={className}></Input>
        </div>
    )

}