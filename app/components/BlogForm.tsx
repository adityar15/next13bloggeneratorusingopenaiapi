"use client"

import { useState, useEffect } from "react"
import Input from "./Input"
import Label from "./Label"
import Button from "./Button"
import { useAppDispatch } from "../utils/client/store/hooks"
import { ArrowPathIcon } from "@heroicons/react/24/solid"
import { setUser } from "../utils/client/store/userSlice"

type Props = {}

const BlogForm = (props: Props) => {
  const [blogForm, setBlogForm] = useState({
    title: "",
    content: "",
    category: "",
    author: "",
  })

  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(setUser({
      id: 1,
      name: "Aditya",
      avatar: "avatar_url"
    }))
  }, [dispatch])

  const [pending, setPending] = useState<boolean>(false)

  const [prompt, setPrompt] = useState<string>("")

  const [show, setShow] = useState<boolean>(false)

  function handleInput(key: string, value: string) {
    setBlogForm({
      ...blogForm,
      [key]: value,
    })
  }

  function generate(){
    setPending(true)
    fetch('/api/generate', {
        method: 'POST',
        body: JSON.stringify({
            ...blogForm,
            prompt
        })
    })
    .then(res => res.json())
    .then(data =>{
        setPending(false)
        handleInput('content', data.content)
    })
  }


  return (
    <form className="flex flex-col space-y-4 w-full px-5 md-px-1 md:w-1/2 mx-auto mt-10">
      <div className="flex flex-col space-y-2">
        <Label htmlFor="title">Article Title</Label>
        <Input type="text" placeholder="title here ..." value={blogForm.title} onInput={(e) => handleInput("title", (e.target as HTMLInputElement).value)} />
      </div>
      <div className="flex flex-col space-y-2">
        <Label htmlFor="category">Category</Label>
        <Input type="text" placeholder="category here ..." value={blogForm.category} onInput={(e) => handleInput("category", (e.target as HTMLInputElement).value)} />
      </div>

      <div className="flex flex-col space-y-2">
        <Label htmlFor="author">Author</Label>
        <Input type="text" placeholder="author here ..." value={blogForm.author} onInput={(e) => handleInput("author", (e.target as HTMLInputElement).value)} />
      </div>

      <div className="flex flex-col space-y-2">
        <Label className="cursor-pointer underline underline-offset-1 decoration-slate-200" onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"} prompt to generate using Chat GPT
        </Label>

        {show ? (
          <>
            <Label htmlFor="prompt">Prompt</Label>
            <div className="flex items-center space-x-3 w-full">
              <Input type="text" className="w-full" placeholder="prompt here ..." value={prompt} onInput={(e) => setPrompt((e.target as HTMLInputElement).value)} />
              <ArrowPathIcon className={`h-6 w-6 fill-gray-400 cursor-pointer ${pending && 'animate-spin'}`} onClick={generate} />
            </div>
          </>
        ) : null}
      </div>

      <div className="flex flex-col space-y-2">
        <Label htmlFor="content">Content</Label>
        <Input.TextArea placeholder="content here ..." value={blogForm.content} rows="8" onInput={(e) => handleInput("content", (e.target as HTMLTextAreaElement).value)} />
      </div>

      <div>
        <Button type="submit">Save</Button>
      </div>
    </form>
  )
}

export default BlogForm
