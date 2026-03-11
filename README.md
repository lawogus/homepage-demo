# Northbound Creative

광고회사 소개용으로 구성한 `Vite + React + TypeScript` 정적 홈페이지입니다.

## Stack

- React 19
- TypeScript
- Vite 6
- Tailwind CSS 4
- Framer Motion

## Local Development

```bash
npm install
npm run dev
```

기본 개발 주소는 `http://localhost:5173` 입니다.

## Production Build

```bash
npm run build
```

빌드 결과물은 `dist/`에 생성됩니다.

## Vercel Deployment

이 프로젝트는 정적 사이트이므로 Vercel에 바로 배포할 수 있습니다.

1. GitHub에 이 프로젝트를 push 합니다.
2. Vercel에서 `Add New Project`를 선택합니다.
3. GitHub 저장소를 연결합니다.
4. 아래 설정으로 배포합니다.

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

`vercel.json`이 포함되어 있어 대부분 자동으로 인식됩니다.

## GitHub Push

로컬 저장소를 GitHub에 연결할 때는 아래 순서로 진행하면 됩니다.

```bash
git remote add origin <YOUR_GITHUB_REPOSITORY_URL>
git push -u origin main
```

예시:

```bash
git remote add origin git@github.com:your-name/northbound-creative.git
git push -u origin main
```

## Temporary Public Sharing

임시 공유가 필요하면 아래처럼 빌드 후 preview 서버를 열고 Cloudflare Tunnel을 사용할 수 있습니다.

```bash
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
cloudflared tunnel --url http://127.0.0.1:4173
```

이 방식은 노트북이나 네트워크 연결이 끊기면 함께 중단됩니다.
