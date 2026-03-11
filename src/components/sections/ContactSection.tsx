import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, MapPin, PhoneCall, TimerReset } from "lucide-react";
import {
  contactChannels,
  inquiryTopics,
  officeHighlights,
  profileHighlights,
} from "../../data/content";
import { cn } from "../../utils/cn";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { SectionBadge } from "../ui/SectionBadge";

type InquiryForm = {
  topic: string;
  company: string;
  name: string;
  email: string;
  message: string;
};

const initialForm: InquiryForm = {
  topic: inquiryTopics[0],
  company: "",
  name: "",
  email: "",
  message: "",
};

const channelIcons = [Mail, PhoneCall, TimerReset, MapPin];

export function ContactSection() {
  const [form, setForm] = useState<InquiryForm>(initialForm);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const updateField = <Key extends keyof InquiryForm>(
    key: Key,
    value: InquiryForm[Key]
  ) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.company.trim() || !form.name.trim() || !form.email.trim()) {
      setError("회사명, 담당자명, 이메일은 필수입니다.");
      setSubmitted(false);
      return;
    }

    if (!form.email.includes("@")) {
      setError("이메일 형식을 확인해주세요.");
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="px-6 pb-28 pt-8 lg:px-10 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <Card className="border-cyan-100/80 bg-[linear-gradient(145deg,_rgba(15,23,42,0.98)_0%,_rgba(15,118,110,0.95)_100%)] p-6 text-white shadow-2xl shadow-cyan-100/30 sm:p-8">
            <SectionBadge dark>AGENCY PROFILE</SectionBadge>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
              브랜드가 더 또렷하게 보이도록
              <br />
              전략과 실행을 함께 설계합니다.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
              우리는 브랜드의 방향을 정리하고, 적절한 채널을 선택하며, 오래 남는
              크리에이티브를 만듭니다. 필요한 순간에 빠르게 움직이고, 결과를 꾸준히
              기록합니다.
            </p>

            <div className="mt-8 space-y-4">
              {profileHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-white/10 bg-white/10 px-5 py-4 text-sm leading-7 text-white/75 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </Card>

          <div className="grid gap-6">
            <Card className="border-cyan-100/80 bg-white/82 p-6 shadow-cyan-100/40 backdrop-blur sm:p-8">
              <SectionBadge>INQUIRY</SectionBadge>
              <div className="mt-6 flex flex-wrap gap-3">
                {inquiryTopics.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => updateField("topic", topic)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm transition",
                      form.topic === topic
                        ? "border-slate-950 bg-slate-950 text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-950"
                    )}
                  >
                    {topic}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <div className="mb-2 text-sm font-medium text-slate-700">
                      회사명
                    </div>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(event) =>
                        updateField("company", event.target.value)
                      }
                      placeholder="예: Lumen Skin"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-950"
                    />
                  </label>

                  <label className="block">
                    <div className="mb-2 text-sm font-medium text-slate-700">
                      담당자명
                    </div>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(event) => updateField("name", event.target.value)}
                      placeholder="예: 김지훈"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-950"
                    />
                  </label>
                </div>

                <label className="block">
                  <div className="mb-2 text-sm font-medium text-slate-700">
                    이메일
                  </div>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    placeholder="name@company.com"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-950"
                  />
                </label>

                <label className="block">
                  <div className="mb-2 text-sm font-medium text-slate-700">
                    문의 내용
                  </div>
                  <textarea
                    value={form.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    placeholder="브랜드 상황이나 현재 고민, 필요한 캠페인 방향을 자유롭게 남겨주세요."
                    rows={5}
                    className="w-full resize-none rounded-[24px] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-950"
                  />
                </label>

                {error ? <div className="text-sm text-rose-600">{error}</div> : null}

                {submitted ? (
                  <div className="rounded-[28px] bg-gradient-to-r from-indigo-50 via-cyan-50 to-emerald-50 px-5 py-5">
                    <div className="text-sm font-semibold text-slate-950">
                      문의 내용을 확인했습니다.
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {form.company}의 {form.topic} 관련 문의를 기준으로 다음 논의를
                      준비할 수 있습니다.
                    </p>
                  </div>
                ) : null}

                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 via-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-200/60"
                >
                  문의 보내기
                </Button>
              </form>
            </Card>

            <Card className="border-cyan-100/80 bg-white/82 p-6 shadow-cyan-100/40 backdrop-blur sm:p-8">
              <div className="grid gap-4 md:grid-cols-3">
                {officeHighlights.map((item) => (
                  <div key={item.title} className="rounded-[24px] bg-slate-50 p-5">
                    <div className="text-base font-semibold text-slate-950">
                      {item.title}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {contactChannels.map((item, idx) => {
                  const Icon = channelIcons[idx];

                  return (
                    <div key={item.label} className="rounded-[24px] bg-slate-50 p-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="mt-4 text-sm text-slate-500">{item.label}</div>
                      <div className="mt-1 text-lg font-semibold text-slate-950">
                        {item.value}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
