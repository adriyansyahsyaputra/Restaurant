import React from "react";
import Input from "./Input";
import Label from "./Label";

export default function InputLabel(props) {
    const {htmlfor, label, type, id, placeholder} = props

    return (
        <div className="mb-4">
            <Label htmlfor={htmlfor}>{label}</Label>
            <Input type={type} id={id} placeholder={placeholder}></Input>
        </div>
    )

}