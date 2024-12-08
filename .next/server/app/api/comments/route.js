"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/comments/route";
exports.ids = ["app/api/comments/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "node:async_hooks":
/*!***********************************!*\
  !*** external "node:async_hooks" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("node:async_hooks");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcomments%2Froute&page=%2Fapi%2Fcomments%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcomments%2Froute.ts&appDir=%2Fhome%2Fdevbox%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fdevbox%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcomments%2Froute&page=%2Fapi%2Fcomments%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcomments%2Froute.ts&appDir=%2Fhome%2Fdevbox%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fdevbox%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_devbox_project_app_api_comments_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/comments/route.ts */ \"(rsc)/./app/api/comments/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/comments/route\",\n        pathname: \"/api/comments\",\n        filename: \"route\",\n        bundlePath: \"app/api/comments/route\"\n    },\n    resolvedPagePath: \"/home/devbox/project/app/api/comments/route.ts\",\n    nextConfigOutput,\n    userland: _home_devbox_project_app_api_comments_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/comments/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjb21tZW50cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGY29tbWVudHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZjb21tZW50cyUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGZGV2Ym94JTJGcHJvamVjdCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRmRldmJveCUyRnByb2plY3QmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ0Y7QUFDM0U7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZDIvPzE0MDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2hvbWUvZGV2Ym94L3Byb2plY3QvYXBwL2FwaS9jb21tZW50cy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY29tbWVudHMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jb21tZW50c1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvY29tbWVudHMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9kZXZib3gvcHJvamVjdC9hcHAvYXBpL2NvbW1lbnRzL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9jb21tZW50cy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcomments%2Froute&page=%2Fapi%2Fcomments%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcomments%2Froute.ts&appDir=%2Fhome%2Fdevbox%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fdevbox%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/comments/route.ts":
/*!***********************************!*\
  !*** ./app/api/comments/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(rsc)/./node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js\");\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(rsc)/./node_modules/@clerk/nextjs/dist/esm/app-router/server/currentUser.js\");\n/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/dbConnect */ \"(rsc)/./lib/dbConnect.ts\");\n/* harmony import */ var _models_Comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/Comment */ \"(rsc)/./models/Comment.ts\");\n\n\n\n\nconst commentMap = new Map();\nconst rootComments = [];\nasync function POST(req) {\n    try {\n        const { userId } = await (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_3__.auth)();\n        const user = await (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_4__.currentUser)();\n        if (!userId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"未登录\"\n            }, {\n                status: 401\n            });\n        }\n        await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const { content } = await req.json();\n        const comment = await _models_Comment__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create({\n            content,\n            userId,\n            userName: user?.firstName || user?.username || \"用户\",\n            userImage: user?.imageUrl || \"https://api.dicebear.com/7.x/avatars/svg\",\n            likes: [],\n            createdAt: new Date()\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(comment);\n    } catch (error) {\n        console.error(\"创建评论失败:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"评论失败\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function GET(request) {\n    const { searchParams } = new URL(request.url);\n    const page = parseInt(searchParams.get(\"page\") || \"1\");\n    const limit = parseInt(searchParams.get(\"limit\") || \"10\");\n    const skip = (page - 1) * limit;\n    try {\n        await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const [comments, total] = await Promise.all([\n            _models_Comment__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find().sort({\n                createdAt: -1\n            }).skip(skip).limit(limit).lean(),\n            _models_Comment__WEBPACK_IMPORTED_MODULE_2__[\"default\"].countDocuments()\n        ]);\n        const hasMore = total > skip + comments.length;\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            comments,\n            hasMore,\n            total\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"获取评论失败\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NvbW1lbnRzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkM7QUFDYztBQUNqQjtBQUNEO0FBZXZDLE1BQU1LLGFBQWEsSUFBSUM7QUFDdkIsTUFBTUMsZUFBcUMsRUFBRTtBQUV0QyxlQUFlQyxLQUFLQyxHQUFZO0lBQ3JDLElBQUk7UUFDRixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHLE1BQU1ULDBEQUFJQTtRQUM3QixNQUFNVSxPQUFPLE1BQU1ULGlFQUFXQTtRQUM5QixJQUFJLENBQUNRLFFBQVE7WUFDWCxPQUFPVixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQU0sR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQzNEO1FBRUEsTUFBTVgsMERBQVNBO1FBQ2YsTUFBTSxFQUFFWSxPQUFPLEVBQUUsR0FBRyxNQUFNTixJQUFJRyxJQUFJO1FBRWxDLE1BQU1JLFVBQVUsTUFBTVosdURBQU9BLENBQUNhLE1BQU0sQ0FBQztZQUNuQ0Y7WUFDQUw7WUFDQVEsVUFBVVAsTUFBTVEsYUFBYVIsTUFBTVMsWUFBWTtZQUMvQ0MsV0FBV1YsTUFBTVcsWUFBWTtZQUM3QkMsT0FBTyxFQUFFO1lBQ1RDLFdBQVcsSUFBSUM7UUFDakI7UUFFQSxPQUFPekIscURBQVlBLENBQUNZLElBQUksQ0FBQ0k7SUFDM0IsRUFBRSxPQUFPSCxPQUFPO1FBQ2RhLFFBQVFiLEtBQUssQ0FBQyxXQUFXQTtRQUN6QixPQUFPYixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBTyxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUM1RDtBQUNGO0FBRU8sZUFBZWEsSUFBSUMsT0FBZ0I7SUFDeEMsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBRyxJQUFJQyxJQUFJRixRQUFRRyxHQUFHO0lBQzVDLE1BQU1DLE9BQU9DLFNBQVNKLGFBQWFLLEdBQUcsQ0FBQyxXQUFXO0lBQ2xELE1BQU1DLFFBQVFGLFNBQVNKLGFBQWFLLEdBQUcsQ0FBQyxZQUFZO0lBQ3BELE1BQU1FLE9BQU8sQ0FBQ0osT0FBTyxLQUFLRztJQUUxQixJQUFJO1FBQ0YsTUFBTWhDLDBEQUFTQTtRQUVmLE1BQU0sQ0FBQ2tDLFVBQVVDLE1BQU0sR0FBRyxNQUFNQyxRQUFRQyxHQUFHLENBQUM7WUFDMUNwQyx1REFBT0EsQ0FBQ3FDLElBQUksR0FDVEMsSUFBSSxDQUFDO2dCQUFFbEIsV0FBVyxDQUFDO1lBQUUsR0FDckJZLElBQUksQ0FBQ0EsTUFDTEQsS0FBSyxDQUFDQSxPQUNOUSxJQUFJO1lBQ1B2Qyx1REFBT0EsQ0FBQ3dDLGNBQWM7U0FDdkI7UUFFRCxNQUFNQyxVQUFVUCxRQUFRRixPQUFPQyxTQUFTUyxNQUFNO1FBRTlDLE9BQU85QyxxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQ3ZCeUI7WUFDQVE7WUFDQVA7UUFDRjtJQUNGLEVBQUUsT0FBT3pCLE9BQU87UUFDZCxPQUFPYixxREFBWUEsQ0FBQ1ksSUFBSSxDQUN0QjtZQUFFQyxPQUFPO1FBQVMsR0FDbEI7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZDIvLi9hcHAvYXBpL2NvbW1lbnRzL3JvdXRlLnRzP2YwNGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgYXV0aCwgY3VycmVudFVzZXIgfSBmcm9tICdAY2xlcmsvbmV4dGpzL3NlcnZlcic7XG5pbXBvcnQgZGJDb25uZWN0IGZyb20gJ0AvbGliL2RiQ29ubmVjdCc7XG5pbXBvcnQgQ29tbWVudCBmcm9tICdAL21vZGVscy9Db21tZW50JztcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmludGVyZmFjZSBDb21tZW50V2l0aFJlcGxpZXMgZXh0ZW5kcyBtb25nb29zZS5Eb2N1bWVudCB7XG4gIF9pZDogc3RyaW5nO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIHVzZXJJZDogc3RyaW5nO1xuICB1c2VyTmFtZTogc3RyaW5nO1xuICB1c2VySW1hZ2U6IHN0cmluZztcbiAgbGlrZXM6IHN0cmluZ1tdO1xuICBjcmVhdGVkQXQ6IERhdGU7XG4gIHBhcmVudElkPzogc3RyaW5nO1xuICByZXBsaWVzOiBDb21tZW50V2l0aFJlcGxpZXNbXTtcbn1cblxuY29uc3QgY29tbWVudE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBDb21tZW50V2l0aFJlcGxpZXM+KCk7XG5jb25zdCByb290Q29tbWVudHM6IENvbW1lbnRXaXRoUmVwbGllc1tdID0gW107XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgdXNlcklkIH0gPSBhd2FpdCBhdXRoKCk7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGN1cnJlbnRVc2VyKCk7XG4gICAgaWYgKCF1c2VySWQpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAn5pyq55m75b2VJyB9LCB7IHN0YXR1czogNDAxIH0pO1xuICAgIH1cblxuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xuICAgIGNvbnN0IHsgY29udGVudCB9ID0gYXdhaXQgcmVxLmpzb24oKTtcblxuICAgIGNvbnN0IGNvbW1lbnQgPSBhd2FpdCBDb21tZW50LmNyZWF0ZSh7XG4gICAgICBjb250ZW50LFxuICAgICAgdXNlcklkLFxuICAgICAgdXNlck5hbWU6IHVzZXI/LmZpcnN0TmFtZSB8fCB1c2VyPy51c2VybmFtZSB8fCAn55So5oi3JywgIC8vIOS9v+eUqOecn+WunueUqOaIt+WQjVxuICAgICAgdXNlckltYWdlOiB1c2VyPy5pbWFnZVVybCB8fCAnaHR0cHM6Ly9hcGkuZGljZWJlYXIuY29tLzcueC9hdmF0YXJzL3N2ZycsICAvLyDkvb/nlKjnnJ/lrp7lpLTlg49cbiAgICAgIGxpa2VzOiBbXSxcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGNvbW1lbnQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+WIm+W7uuivhOiuuuWksei0pTonLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICfor4TorrrlpLHotKUnIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHsgc2VhcmNoUGFyYW1zIH0gPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgY29uc3QgcGFnZSA9IHBhcnNlSW50KHNlYXJjaFBhcmFtcy5nZXQoJ3BhZ2UnKSB8fCAnMScpO1xuICBjb25zdCBsaW1pdCA9IHBhcnNlSW50KHNlYXJjaFBhcmFtcy5nZXQoJ2xpbWl0JykgfHwgJzEwJyk7XG4gIGNvbnN0IHNraXAgPSAocGFnZSAtIDEpICogbGltaXQ7XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBkYkNvbm5lY3QoKTtcbiAgICBcbiAgICBjb25zdCBbY29tbWVudHMsIHRvdGFsXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIENvbW1lbnQuZmluZCgpXG4gICAgICAgIC5zb3J0KHsgY3JlYXRlZEF0OiAtMSB9KVxuICAgICAgICAuc2tpcChza2lwKVxuICAgICAgICAubGltaXQobGltaXQpXG4gICAgICAgIC5sZWFuKCksXG4gICAgICBDb21tZW50LmNvdW50RG9jdW1lbnRzKClcbiAgICBdKTtcblxuICAgIGNvbnN0IGhhc01vcmUgPSB0b3RhbCA+IHNraXAgKyBjb21tZW50cy5sZW5ndGg7XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgY29tbWVudHMsXG4gICAgICBoYXNNb3JlLFxuICAgICAgdG90YWxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiAn6I635Y+W6K+E6K665aSx6LSlJyB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufSAiXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiYXV0aCIsImN1cnJlbnRVc2VyIiwiZGJDb25uZWN0IiwiQ29tbWVudCIsImNvbW1lbnRNYXAiLCJNYXAiLCJyb290Q29tbWVudHMiLCJQT1NUIiwicmVxIiwidXNlcklkIiwidXNlciIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImNvbnRlbnQiLCJjb21tZW50IiwiY3JlYXRlIiwidXNlck5hbWUiLCJmaXJzdE5hbWUiLCJ1c2VybmFtZSIsInVzZXJJbWFnZSIsImltYWdlVXJsIiwibGlrZXMiLCJjcmVhdGVkQXQiLCJEYXRlIiwiY29uc29sZSIsIkdFVCIsInJlcXVlc3QiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJ1cmwiLCJwYWdlIiwicGFyc2VJbnQiLCJnZXQiLCJsaW1pdCIsInNraXAiLCJjb21tZW50cyIsInRvdGFsIiwiUHJvbWlzZSIsImFsbCIsImZpbmQiLCJzb3J0IiwibGVhbiIsImNvdW50RG9jdW1lbnRzIiwiaGFzTW9yZSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/comments/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/dbConnect.ts":
/*!**************************!*\
  !*** ./lib/dbConnect.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"请在环境变量中设置 MONGODB_URI\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then(()=>{\n            return cached;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGJDb25uZWN0LnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQVNoQyxNQUFNQyxjQUFjQyxRQUFRQyxHQUFHLENBQUNGLFdBQVc7QUFFM0MsSUFBSSxDQUFDQSxhQUFhO0lBQ2hCLE1BQU0sSUFBSUcsTUFBTTtBQUNsQjtBQUVBLElBQUlDLFNBQVNDLE9BQU9OLFFBQVE7QUFFNUIsSUFBSSxDQUFDSyxRQUFRO0lBQ1hBLFNBQVNDLE9BQU9OLFFBQVEsR0FBRztRQUFFTyxNQUFNO1FBQU1DLFNBQVM7SUFBSztBQUN6RDtBQUVBLGVBQWVDO0lBQ2IsSUFBSUosT0FBT0UsSUFBSSxFQUFFO1FBQ2YsT0FBT0YsT0FBT0UsSUFBSTtJQUNwQjtJQUVBLElBQUksQ0FBQ0YsT0FBT0csT0FBTyxFQUFFO1FBQ25CLE1BQU1FLE9BQU87WUFDWEMsZ0JBQWdCO1FBQ2xCO1FBRUFOLE9BQU9HLE9BQU8sR0FBR1IsdURBQWdCLENBQUNDLGFBQWFTLE1BQU1HLElBQUksQ0FBQztZQUN4RCxPQUFPUjtRQUNUO0lBQ0Y7SUFFQSxJQUFJO1FBQ0ZBLE9BQU9FLElBQUksR0FBRyxNQUFNRixPQUFPRyxPQUFPO0lBQ3BDLEVBQUUsT0FBT00sR0FBRztRQUNWVCxPQUFPRyxPQUFPLEdBQUc7UUFDakIsTUFBTU07SUFDUjtJQUVBLE9BQU9ULE9BQU9FLElBQUk7QUFDcEI7QUFFQSxpRUFBZUUsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VudGl0bGVkMi8uL2xpYi9kYkNvbm5lY3QudHM/Yzg4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBtb25nb29zZToge1xuICAgIGNvbm46IG51bGwgfCB0eXBlb2YgbW9uZ29vc2U7XG4gICAgcHJvbWlzZTogbnVsbCB8IFByb21pc2U8dHlwZW9mIG1vbmdvb3NlPjtcbiAgfTtcbn1cblxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSSE7XG5cbmlmICghTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCfor7flnKjnjq/looPlj5jph4/kuK3orr7nva4gTU9OR09EQl9VUkknKTtcbn1cblxubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZTtcblxuaWYgKCFjYWNoZWQpIHtcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcbiAgaWYgKGNhY2hlZC5jb25uKSB7XG4gICAgcmV0dXJuIGNhY2hlZC5jb25uO1xuICB9XG5cbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXG4gICAgfTtcblxuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cykudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gY2FjaGVkO1xuICAgIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkLnByb21pc2UgPSBudWxsO1xuICAgIHRocm93IGU7XG4gIH1cblxuICByZXR1cm4gY2FjaGVkLmNvbm47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDsgIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsIm9wdHMiLCJidWZmZXJDb21tYW5kcyIsImNvbm5lY3QiLCJ0aGVuIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/dbConnect.ts\n");

/***/ }),

/***/ "(rsc)/./models/Comment.ts":
/*!***************************!*\
  !*** ./models/Comment.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CommentSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    content: {\n        type: String,\n        required: true\n    },\n    userId: {\n        type: String,\n        required: true\n    },\n    userName: {\n        type: String,\n        required: true\n    },\n    userImage: {\n        type: String,\n        required: true\n    },\n    likes: [\n        {\n            type: String // 存储点赞用户的 ID\n        }\n    ],\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Comment || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Comment\", CommentSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvQ29tbWVudC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsZ0JBQWdCLElBQUlELHdEQUFlLENBQUM7SUFDeENHLFNBQVM7UUFDUEMsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FDLFFBQVE7UUFDTkgsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FFLFVBQVU7UUFDUkosTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FHLFdBQVc7UUFDVEwsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FJLE9BQU87UUFBQztZQUNOTixNQUFNQyxPQUFRLGFBQWE7UUFDN0I7S0FBRTtJQUNGTSxXQUFXO1FBQ1RQLE1BQU1RO1FBQ05DLFNBQVNELEtBQUtFLEdBQUc7SUFDbkI7QUFDRjtBQUVBLGlFQUFlZCx3REFBZSxDQUFDZ0IsT0FBTyxJQUFJaEIscURBQWMsQ0FBQyxXQUFXQyxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW50aXRsZWQyLy4vbW9kZWxzL0NvbW1lbnQudHM/NzMxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBDb21tZW50U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIGNvbnRlbnQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWVcbiAgfSxcbiAgdXNlcklkOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG4gIHVzZXJOYW1lOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG4gIHVzZXJJbWFnZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZVxuICB9LFxuICBsaWtlczogW3tcbiAgICB0eXBlOiBTdHJpbmcgIC8vIOWtmOWCqOeCuei1nueUqOaIt+eahCBJRFxuICB9XSxcbiAgY3JlYXRlZEF0OiB7XG4gICAgdHlwZTogRGF0ZSxcbiAgICBkZWZhdWx0OiBEYXRlLm5vd1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLkNvbW1lbnQgfHwgbW9uZ29vc2UubW9kZWwoJ0NvbW1lbnQnLCBDb21tZW50U2NoZW1hKTsgIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiQ29tbWVudFNjaGVtYSIsIlNjaGVtYSIsImNvbnRlbnQiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1c2VySWQiLCJ1c2VyTmFtZSIsInVzZXJJbWFnZSIsImxpa2VzIiwiY3JlYXRlZEF0IiwiRGF0ZSIsImRlZmF1bHQiLCJub3ciLCJtb2RlbHMiLCJDb21tZW50IiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/Comment.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@clerk","vendor-chunks/crypto-js","vendor-chunks/tslib","vendor-chunks/cookie","vendor-chunks/map-obj","vendor-chunks/no-case","vendor-chunks/lower-case","vendor-chunks/snakecase-keys","vendor-chunks/snake-case","vendor-chunks/dot-case"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcomments%2Froute&page=%2Fapi%2Fcomments%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcomments%2Froute.ts&appDir=%2Fhome%2Fdevbox%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fdevbox%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();