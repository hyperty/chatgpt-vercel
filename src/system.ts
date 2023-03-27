import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `Based on OpenAI GPT-3.5-turbo. [[Deploy by Tianyi]] 
- API资源有限，自己人可以尽情使用，但请不要Share给其他人哦。
- ChatGPT的表现如何，取决于你提问题的能力。不要吝啬你的提问，提供尽可能多的信息，它能有更好的表现。
- 使用中有任何问题，可以[点我联系](https://teams.microsoft.com/l/chat/0/0?users=liuty24@lenovo.com&message=Hi%20folks%2C%20something%20went%20wrong%20with%20your%20GPT%20website
)。
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] 搜索 Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
