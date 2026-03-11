"use client"

import React from "react"
import { Drawer } from "vaul"

interface SheetProps {
  children: React.ReactNode
  title: string
  description?: string
  open: boolean
  onClose: () => void
}

export default function Sheet({ children, open, onClose, title, description }: SheetProps) {
  return (
    <Drawer.Root open={open} onClose={onClose}>
      <Drawer.Portal>
        <Drawer.Overlay
          className="fixed inset-0 z-[500] bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />
        <Drawer.Content
          style={{ "--initial-transform": "calc(100% + 16px)" } as React.CSSProperties}
          className="fixed inset-x-0 bottom-0 z-[501] mx-auto max-h-[92vh] w-[calc(100vw-32px)] overflow-hidden rounded-t-2xl outline-none md:w-[680px] md:rounded-3xl md:bottom-4"
        >
          <Drawer.Title className="sr-only">{title}</Drawer.Title>
          <Drawer.Description className="sr-only">
            {description || "Read the full content below"}
          </Drawer.Description>

          {/* Sheet body */}
          <div className="relative flex flex-col bg-[#111] border border-white/[0.08] rounded-t-2xl md:rounded-3xl">
            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-0">
              <div className="h-1 w-10 rounded-full bg-white/20" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
              <h2 className="text-lg font-bold text-white">{title}</h2>
              <button
                onClick={onClose}
                className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto max-h-[78vh] px-6 py-6 text-sm leading-relaxed text-neutral-300">
              {children}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
