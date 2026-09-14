(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ThreeScene.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThreeScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-156d8d12.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const liquidVertexShader = `
  uniform float uTime;
  uniform float uScroll;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vec3 displaced = position;
    float wave = sin(position.y * 3.4 + uTime * 1.4) * 0.075;
    wave += sin(position.x * 4.2 - uTime * 1.1) * 0.045;
    wave += cos(position.z * 5.1 + uTime * 0.9) * 0.035;
    displaced += normal * (wave + uScroll * 0.035);
    vNormal = normalize(normalMatrix * normal);
    vPosition = displaced;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
  }
`;
const liquidFragmentShader = `
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vec3 cool = vec3(0.16, 0.53, 1.0);
    vec3 light = vec3(0.86, 0.96, 1.0);
    float rim = pow(1.0 - max(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0)), 0.0), 2.2);
    float shimmer = 0.5 + 0.5 * sin(vPosition.y * 5.0 + uTime * 1.7);
    vec3 color = mix(cool, light, rim * 0.8 + shimmer * 0.12);
    gl_FragColor = vec4(color, 0.9);
  }
`;
function LiquidGlassOrb() {
    _s();
    const group = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const liquidMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointerTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const scrollTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiquidGlassOrb.useEffect": ()=>{
            const updatePointer = {
                "LiquidGlassOrb.useEffect.updatePointer": (event)=>{
                    pointerTarget.current = {
                        x: (event.clientX / window.innerWidth - 0.5) * 2,
                        y: (event.clientY / window.innerHeight - 0.5) * -2
                    };
                }
            }["LiquidGlassOrb.useEffect.updatePointer"];
            const updateScroll = {
                "LiquidGlassOrb.useEffect.updateScroll": ()=>{
                    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                    scrollTarget.current = maxScroll > 0 ? window.scrollY / maxScroll : 0;
                }
            }["LiquidGlassOrb.useEffect.updateScroll"];
            updateScroll();
            window.addEventListener('pointermove', updatePointer);
            window.addEventListener('scroll', updateScroll, {
                passive: true
            });
            return ({
                "LiquidGlassOrb.useEffect": ()=>{
                    window.removeEventListener('pointermove', updatePointer);
                    window.removeEventListener('scroll', updateScroll);
                }
            })["LiquidGlassOrb.useEffect"];
        }
    }["LiquidGlassOrb.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "LiquidGlassOrb.useFrame": ({ clock })=>{
            if (!group.current) return;
            const elapsed = clock.getElapsedTime();
            const pointer = pointerTarget.current;
            const scroll = scrollTarget.current;
            const targetRotationX = elapsed * 0.12 + pointer.y * 0.28 + scroll * Math.PI * 1.2;
            const targetRotationY = elapsed * 0.18 + pointer.x * 0.42 + scroll * Math.PI * 1.7;
            group.current.rotation.x += (targetRotationX - group.current.rotation.x) * 0.035;
            group.current.rotation.y += (targetRotationY - group.current.rotation.y) * 0.035;
            group.current.rotation.z += (scroll * 0.8 - group.current.rotation.z) * 0.035;
            group.current.position.x += (pointer.x * 0.34 - group.current.position.x) * 0.025;
            group.current.position.y += (pointer.y * 0.24 + scroll * 0.45 - group.current.position.y) * 0.025;
            const targetScale = 1 + scroll * 0.18;
            group.current.scale.x += (targetScale - group.current.scale.x) * 0.025;
            group.current.scale.y += (targetScale - group.current.scale.y) * 0.025;
            group.current.scale.z += (targetScale - group.current.scale.z) * 0.025;
            if (liquidMaterial.current) {
                liquidMaterial.current.uniforms.uTime.value = elapsed;
                liquidMaterial.current.uniforms.uScroll.value = scroll;
            }
        }
    }["LiquidGlassOrb.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: group,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            1.45,
                            96,
                            64
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/ThreeScene.jsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("shaderMaterial", {
                        ref: liquidMaterial,
                        vertexShader: liquidVertexShader,
                        fragmentShader: liquidFragmentShader,
                        uniforms: {
                            uTime: {
                                value: 0
                            },
                            uScroll: {
                                value: 0
                            }
                        },
                        transparent: true,
                        opacity: 0.92
                    }, void 0, false, {
                        fileName: "[project]/components/ThreeScene.jsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ThreeScene.jsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                scale: 0.82,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            1.45,
                            64,
                            48
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/ThreeScene.jsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
                        color: "#bfe3ff",
                        emissive: "#2388e8",
                        emissiveIntensity: 0.45,
                        roughness: 0.08,
                        metalness: 0.08,
                        transmission: 0.82,
                        thickness: 1.6,
                        transparent: true,
                        opacity: 0.35
                    }, void 0, false, {
                        fileName: "[project]/components/ThreeScene.jsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ThreeScene.jsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                scale: 1.04,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            1.45,
                            64,
                            48
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/ThreeScene.jsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
                        color: "#75bdff",
                        roughness: 0.04,
                        metalness: 0.15,
                        transmission: 0.92,
                        thickness: 0.4,
                        transparent: true,
                        opacity: 0.18
                    }, void 0, false, {
                        fileName: "[project]/components/ThreeScene.jsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ThreeScene.jsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -0.42,
                    0.58,
                    1.15
                ],
                scale: 0.2,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            1,
                            32,
                            24
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/ThreeScene.jsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#ffffff",
                        transparent: true,
                        opacity: 0.75
                    }, void 0, false, {
                        fileName: "[project]/components/ThreeScene.jsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ThreeScene.jsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ThreeScene.jsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s(LiquidGlassOrb, "D646AzA6yoEm1NNTbFqXsVKAZuQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$156d8d12$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = LiquidGlassOrb;
function ThreeScene() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "three-scene",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            camera: {
                position: [
                    0,
                    0,
                    6.4
                ],
                fov: 42
            },
            dpr: [
                1,
                1.7
            ],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                    intensity: 0.8
                }, void 0, false, {
                    fileName: "[project]/components/ThreeScene.jsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                    position: [
                        3,
                        3,
                        4
                    ],
                    intensity: 12,
                    color: "#b9ddff"
                }, void 0, false, {
                    fileName: "[project]/components/ThreeScene.jsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                    position: [
                        -4,
                        -2,
                        2
                    ],
                    intensity: 8,
                    color: "#176bff"
                }, void 0, false, {
                    fileName: "[project]/components/ThreeScene.jsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LiquidGlassOrb, {}, void 0, false, {
                    fileName: "[project]/components/ThreeScene.jsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ThreeScene.jsx",
            lineNumber: 112,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ThreeScene.jsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c1 = ThreeScene;
var _c, _c1;
__turbopack_context__.k.register(_c, "LiquidGlassOrb");
__turbopack_context__.k.register(_c1, "ThreeScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ThreeScene.jsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/components/ThreeScene.jsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_ThreeScene_jsx_14z4fdw._.js.map