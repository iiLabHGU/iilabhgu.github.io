# Industrial Intelligence Lab (IILab) Website

한동대학교 기계제어공학부 산업지능화 연구실 웹페이지 — https://iilabhgu.github.io

저장소: https://github.com/iiLabHGU/iilabhgu.github.io (예전 주소 ssslab-hgu.github.io 는 이 사이트로 자동 이동)

Jekyll 기반이며 GitHub Pages에서 자동으로 빌드됩니다. `main` 브랜치에 push 하면 몇 분 후 사이트에 반영됩니다.

## 내용 수정하기 (대부분 여기만 수정하면 됩니다)

| 수정할 내용 | 파일 |
| --- | --- |
| 구성원 (교수, 대학원생, 학부연구생) | [`_data/members.yml`](_data/members.yml) |
| 졸업생 | [`_data/alumni.yml`](_data/alumni.yml) |
| 논문 · 학회 · 특허 · 기술이전 | [`_data/publications.yml`](_data/publications.yml) |
| 뉴스 · 활동 | [`_data/news.yml`](_data/news.yml) — 최신 항목을 맨 위에 추가 |
| 연구과제 | [`_data/projects.yml`](_data/projects.yml) |
| 홈 M.Ax 문구 · 대표성과 숫자 · 협력기업 · 대표 사례(`featured`) | [`_data/highlights.yml`](_data/highlights.yml) |
| 연구분야 카드 (제목, 요약, Research 페이지용 한 줄 요약 `short`, 키워드, 이미지, 핵심 분야 여부 `main`) | [`_data/research.yml`](_data/research.yml) |
| 연구분야 상세 내용 | [`research/*.md`](research/) |
| 연락처, 주소, 외부 링크 | [`_config.yml`](_config.yml)의 `lab:` 항목 |
| 상단 메뉴 | [`_data/navigation.yml`](_data/navigation.yml) |
| 모집 안내 | [`join.md`](join.md) |

- 사진은 `assets/images/people/`, 연구 이미지는 `assets/images/research/`에 넣고 경로를 YAML/마크다운에 적어 주세요.
- 구성원 사진이 없으면 이름 첫 글자로 된 아바타가 자동으로 표시됩니다.
- 논문의 `areas` 값을 지정하면 해당 연구분야 상세 페이지 하단에 자동으로 표시되고, Publications 페이지에서 분야별 필터가 가능합니다.
- 각 파일의 `TODO` 주석이 최신화가 필요한 부분입니다.

## 검색 최적화 (SEO)

- 검색결과 제목·설명: 각 페이지 맨 위의 `seo_title`, `description` (연구분야 상세 페이지는 `_data/research.yml`의 `seo_title`, `description`, `intro_ko`)
- 사이트 기본 설명·키워드: `_config.yml`의 `description`, `keywords`
- Google Search Console / 네이버 서치어드바이저 소유 확인 코드: `_config.yml`의 `verification:` 에 입력
- 사이트맵은 `/sitemap.xml`로 자동 생성됩니다. 두 서비스에 이 주소를 제출하세요.
- 공유 미리보기 이미지: `assets/images/og-default.jpg`

## 구조

```
_config.yml          사이트 설정 + 연구실 정보
_data/               콘텐츠 데이터 (YAML)
_layouts/            default / page / research 레이아웃
_includes/           header, footer, 논문·뉴스·아바타 컴포넌트
assets/css/style.css 전체 스타일
assets/js/main.js    모바일 메뉴, 논문 필터
index.html           홈
research/            연구분야 목록 + 분야별 상세 페이지
projects.html, people.html, publications.html, news.html, join.md, contact.md
```

예전 주소(`/about/`, `/publication/`, `/undergraduate/`, `/ai/`, `/dlip/`, `/lidar/`, `/sms/`, `/research/lidar/`, `/research/industrial-ai/`, `/research/machine-vision/`)는 새 페이지로 자동 연결됩니다.

## 로컬에서 미리보기

Ruby 3.x 설치 후:

```bash
bundle install
bundle exec jekyll serve
# http://localhost:4000
```
