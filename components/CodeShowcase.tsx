"use client";
import { useState } from "react";

type Seg = [string, string];
const S = (c: string, t: string): Seg => [c, t];
const code: Record<string, Seg[][]> = {
  py: [
    [S("cc", "# bot pesanan Telegram")],
    [S("ck", "from"), S("", " aiogram "), S("ck", "import"), S("", " Bot, Dispatcher, types")],
    [S("ck", "from"), S("", " aiogram.filters "), S("ck", "import"), S("", " Command")],
    [S("", "")],
    [S("", "dp = Dispatcher()")],
    [S("", "")],
    [S("", "@dp.message(Command("), S("cs", '"menu"'), S("", "))")],
    [S("ck", "async def "), S("cf", "menu"), S("", "(m: types.Message):")],
    [S("", "    "), S("ck", "await"), S("", " m.answer("), S("cs", '"Kopi susu – Rp 18.000"'), S("", ")")],
  ],
  js: [
    [S("cc", "// bot WhatsApp pesanan (Baileys)")],
    [S("", "sock.ev."), S("cf", "on"), S("", "("), S("cs", '"messages.upsert"'), S("", ", "), S("ck", "async"), S("", " ({ messages }) "), S("ck", "=>"), S("", " {")],
    [S("", "  "), S("ck", "const"), S("", " m = messages[0]")],
    [S("", "  "), S("ck", "if"), S("", " (m.message?.conversation === "), S("cs", '"!menu"'), S("", ")")],
    [S("", "    "), S("ck", "await"), S("", " sock."), S("cf", "sendMessage"), S("", "(m.key.remoteJid, {")],
    [S("", "      text: "), S("cs", '"Kopi susu – Rp 18.000"')],
    [S("", "    })")],
    [S("", "})")],
  ],
};

export default function CodeShowcase() {
  const [k, setK] = useState<"py" | "js">("py");
  return (
    <div className="code">
      <div className="ch">
        <i /><i /><i />
        <div className="tb">
          {([["py", "Python"], ["js", "Node.js"]] as const).map(([id, l]) => (
            <button key={id} type="button" aria-pressed={k === id} onClick={() => setK(id)}>{l}</button>
          ))}
        </div>
      </div>
      <pre key={k} aria-label="Contoh kode bot">
        {code[k].map((line, i) => (
          <span key={i} className="l" style={{ animationDelay: `${i * 90}ms`, display: "block" }}>
            {line.map(([c, t], j) => <span key={j} className={c || undefined}>{t}</span>)}{"\u200b"}
          </span>
        ))}
      </pre>
    </div>
  );
}
