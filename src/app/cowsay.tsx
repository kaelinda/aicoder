"use client";

import { useState } from "react";
import { moos } from "@/content/site";

const COW = String.raw`        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||`;

export function Cowsay() {
  const [i, setI] = useState(0);

  return (
    <div className="term">
      <div className="term-bar" aria-hidden="true">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="term-title">~/pasture — zsh</span>
      </div>
      <div className="term-body">
        <p className="term-cmd">
          <span className="prompt">➜</span> cowsay <span className="term-arg">&quot;{moos[i]}&quot;</span>
        </p>
        <p className="bubble" aria-live="polite">
          {moos[i]}
        </p>
        <pre className="cow" aria-hidden="true">
          {COW}
        </pre>
        <button type="button" className="moo-btn" onClick={() => setI((i + 1) % moos.length)}>
          <span className="prompt">↵</span> 再哞一句
        </button>
      </div>
    </div>
  );
}
