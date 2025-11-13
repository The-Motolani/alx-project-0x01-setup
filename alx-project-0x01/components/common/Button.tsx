import React, {useState, ChangeEvent, FormEvent} from "react";
import { PostProps } from "@/interfaces";

const Button: React.FC<PostProps> = ({changeEvent, FormEvent, onSubmit})
=> {
    const [submit setSubmit] = useState<PostProps>
}

const handleAddButton = (e: FormEvent) => {
    e.preventDefault();
}

