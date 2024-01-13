import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAut from "./middlewares/withAuth";

export function mainmiddleware(req: NextRequest) {
    const res = NextResponse.next();
    return res;
}

export default withAut(mainmiddleware, ["/profile", "/admin"])
