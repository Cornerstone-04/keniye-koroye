import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host");

  if (host === "keniyekoroye.vercel.app") {
    const url = request.nextUrl.clone();
    url.hostname = "www.koroye.com";
    url.protocol = "https:";

    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}
