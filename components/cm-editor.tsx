// Built using liveblocks.io codemirror client

"use client"

import { CopyButton } from "@/components/copy-button"
import useCodeMirror from "@/lib/hooks/use-codemirror"
import { EditorState } from "@codemirror/state"
import React, { useCallback, useEffect, useState } from "react"

interface Props {
  initialDoc: string
}

const Editor: React.FC<Props> = (props) => {
  const { initialDoc } = props

  const [doc, setDoc] = useState<string>("# Hello, World!\n")
  const [isAnswer, setIsAnswer] = useState(false)

  const handleChange = useCallback((state: EditorState) => {
    setDoc(state.doc.toString())
  }, [])
  const { refContainer, editorView, mutateText } =
    useCodeMirror<HTMLDivElement>({
      initialDoc: initialDoc,
      onChange: handleChange,
    })

  useEffect(() => {
    if (editorView) {
      mutateText?.("# hello from cm-editor \n")
    } else {
      mutateText?.("# hello from starter \n")
    }
  }, [editorView, mutateText])

  return <div ref={refContainer}></div>
}

export default Editor

// Built using liveblocks.io codemirror client