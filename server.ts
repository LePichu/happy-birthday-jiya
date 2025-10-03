import { serveDir } from "https://deno.land/std@0.188.0/http/file_server.ts"
import { serve } from "https://deno.land/std@0.188.0/http/server.ts"

serve(async (req) => {
	const url = new URL(req.url)
	const pathname = url.pathname

	if (pathname.startsWith("/") && !pathname.startsWith("/api")) {
		return serveDir(req, {
			fsRoot: "dist",
			urlRoot: "",
			showDirListing: true,
			enableCors: true,
		})
	}

	return new Response("Not Found", { status: 404 })
})
