/* @ts-self-types="./k7_web.d.ts" */

export class K7Web {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        K7WebFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_k7web_free(ptr, 0);
    }
    /**
     * Bind a canvas once, then call draw_bound_canvas() each frame to avoid string marshaling.
     * @param {string} canvas_id
     */
    bind_canvas(canvas_id) {
        const ptr0 = passStringToWasm0(canvas_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.k7web_bind_canvas(this.__wbg_ptr, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * GFX: set camera offset.
     * @param {number} x
     * @param {number} y
     */
    camera(x, y) {
        wasm.k7web_camera(this.__wbg_ptr, x, y);
    }
    /**
     * GFX: circle outline.
     * @param {number} x
     * @param {number} y
     * @param {number} r
     * @param {number} col
     */
    circ(x, y, r, col) {
        wasm.k7web_circ(this.__wbg_ptr, x, y, r, col);
    }
    /**
     * GFX: filled circle.
     * @param {number} x
     * @param {number} y
     * @param {number} r
     * @param {number} col
     */
    circfill(x, y, r, col) {
        wasm.k7web_circfill(this.__wbg_ptr, x, y, r, col);
    }
    clear_dmg_wave_cart() {
        wasm.k7web_clear_dmg_wave_cart(this.__wbg_ptr);
    }
    /**
     * GFX API for Python/JS: clear screen with color index 0..15.
     * @param {number} col
     */
    cls(col) {
        wasm.k7web_cls(this.__wbg_ptr, col);
    }
    /**
     * GFX: set current draw color (used when col is -1).
     * @param {number} col
     */
    color(col) {
        wasm.k7web_color(this.__wbg_ptr, col);
    }
    /**
     * Copy RGBA pixel data into the screen at (x, y). data length must be at least w*h*4.
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @param {Uint8Array} data
     */
    copy_from_u8(x, y, w, h, data) {
        const ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.k7web_copy_from_u8(this.__wbg_ptr, x, y, w, h, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * Draw to the canvas previously bound by bind_canvas().
     */
    draw_bound_canvas() {
        const ret = wasm.k7web_draw_bound_canvas(this.__wbg_ptr);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * Draw current frame to canvas (call each frame).
     * @param {string} canvas_id
     */
    draw_to_canvas(canvas_id) {
        const ptr0 = passStringToWasm0(canvas_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.k7web_draw_to_canvas(this.__wbg_ptr, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * Expand instrument token (e.g. "c4:piano:bright" -> "c4:layer:...|reverb:small"). Core sound notation.
     * @param {string} token
     * @returns {string}
     */
    expand_sound_token(token) {
        let deferred2_0;
        let deferred2_1;
        try {
            const ptr0 = passStringToWasm0(token, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.k7web_expand_sound_token(this.__wbg_ptr, ptr0, len0);
            deferred2_0 = ret[0];
            deferred2_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
        }
    }
    /**
     * Sample rate used by render_sound (44100).
     * @returns {number}
     */
    get_audio_sample_rate() {
        const ret = wasm.k7web_get_audio_sample_rate(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Get full map as bytes: 256×32 (row-major). For editors.
     * @returns {Uint8Array}
     */
    get_map() {
        const ret = wasm.k7web_get_map(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * Get full map flags as bytes: 256×32 (row-major). For editors and share state.
     * @returns {Uint8Array}
     */
    get_map_flags() {
        const ret = wasm.k7web_get_map_flags(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * Get full sprite sheet as palette indices: 256×64 bytes (row-major). For editors.
     * @returns {Uint8Array}
     */
    get_sprite_sheet() {
        const ret = wasm.k7web_get_sprite_sheet(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * GFX: line.
     * @param {number} x0
     * @param {number} y0
     * @param {number} x1
     * @param {number} y1
     * @param {number} col
     */
    line(x0, y0, x1, y1, col) {
        wasm.k7web_line(this.__wbg_ptr, x0, y0, x1, y1, col);
    }
    /**
     * Map: draw map as sprites (uses tile flags: flip_x, flip_y, rotate). cell_x, cell_y = start cell; sx, sy = pixel dest; w, h = cells to draw.
     * @param {number} cell_x
     * @param {number} cell_y
     * @param {number} sx
     * @param {number} sy
     * @param {number} w
     * @param {number} h
     */
    map_draw(cell_x, cell_y, sx, sy, w, h) {
        wasm.k7web_map_draw(this.__wbg_ptr, cell_x, cell_y, sx, sy, w, h);
    }
    /**
     * Map: get cell at (cx, cy). Map is 256×32 cells.
     * @param {number} cx
     * @param {number} cy
     * @returns {number}
     */
    mget(cx, cy) {
        const ret = wasm.k7web_mget(this.__wbg_ptr, cx, cy);
        return ret;
    }
    /**
     * Map: get tile flags at (cx, cy). Bits: 1=flip_x, 2=flip_y, 4=rotate 90° CW.
     * @param {number} cx
     * @param {number} cy
     * @returns {number}
     */
    mget_flags(cx, cy) {
        const ret = wasm.k7web_mget_flags(this.__wbg_ptr, cx, cy);
        return ret;
    }
    /**
     * Map: set cell (cx, cy) to value v (sprite index 0–255).
     * @param {number} cx
     * @param {number} cy
     * @param {number} v
     */
    mset(cx, cy, v) {
        wasm.k7web_mset(this.__wbg_ptr, cx, cy, v);
    }
    /**
     * Map: set tile flags at (cx, cy). Bits: 1=flip_x, 2=flip_y, 4=rotate.
     * @param {number} cx
     * @param {number} cy
     * @param {number} f
     */
    mset_flags(cx, cy, f) {
        wasm.k7web_mset_flags(this.__wbg_ptr, cx, cy, f);
    }
    constructor() {
        const ret = wasm.k7web_new();
        this.__wbg_ptr = ret >>> 0;
        K7WebFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * Palette: list of built-in palette names. Returns JS array of strings.
     * @returns {Array<any>}
     */
    palette_list() {
        const ret = wasm.k7web_palette_list(this.__wbg_ptr);
        return ret;
    }
    /**
     * Palette: swap two color entries (0..15). Use for flash or swap effects.
     * @param {number} a
     * @param {number} b
     */
    palette_swap(a, b) {
        wasm.k7web_palette_swap(this.__wbg_ptr, a, b);
    }
    /**
     * GFX: print text at (x,y) with color.
     * @param {string} text
     * @param {number} x
     * @param {number} y
     * @param {number} col
     */
    print(text, x, y, col) {
        const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.k7web_print(this.__wbg_ptr, ptr0, len0, x, y, col);
    }
    /**
     * GFX: print text at (x,y) with 32-bit RGBA (supports transparency).
     * @param {string} text
     * @param {number} x
     * @param {number} y
     * @param {number} r
     * @param {number} g
     * @param {number} b
     * @param {number} a
     */
    print_rgba(text, x, y, r, g, b, a) {
        const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.k7web_print_rgba(this.__wbg_ptr, ptr0, len0, x, y, r, g, b, a);
    }
    /**
     * GFX: set pixel at (x,y) with palette color.
     * @param {number} x
     * @param {number} y
     * @param {number} col
     */
    pset(x, y, col) {
        wasm.k7web_pset(this.__wbg_ptr, x, y, col);
    }
    /**
     * GFX: set pixel with RGBA (0..255).
     * @param {number} x
     * @param {number} y
     * @param {number} r
     * @param {number} g
     * @param {number} b
     * @param {number} a
     */
    pset_rgba(x, y, r, g, b, a) {
        wasm.k7web_pset_rgba(this.__wbg_ptr, x, y, r, g, b, a);
    }
    /**
     * GFX: rectangle outline.
     * @param {number} x0
     * @param {number} y0
     * @param {number} x1
     * @param {number} y1
     * @param {number} col
     */
    rect(x0, y0, x1, y1, col) {
        wasm.k7web_rect(this.__wbg_ptr, x0, y0, x1, y1, col);
    }
    /**
     * GFX: filled rectangle.
     * @param {number} x0
     * @param {number} y0
     * @param {number} x1
     * @param {number} y1
     * @param {number} col
     */
    rectfill(x0, y0, x1, y1, col) {
        wasm.k7web_rectfill(this.__wbg_ptr, x0, y0, x1, y1, col);
    }
    /**
     * GFX: filled rectangle with RGBA (0..255).
     * @param {number} x0
     * @param {number} y0
     * @param {number} x1
     * @param {number} y1
     * @param {number} r
     * @param {number} g
     * @param {number} b
     * @param {number} a
     */
    rectfill_rgba(x0, y0, x1, y1, r, g, b, a) {
        wasm.k7web_rectfill_rgba(this.__wbg_ptr, x0, y0, x1, y1, r, g, b, a);
    }
    /**
     * Render a sound notation string to mono float samples using the Rust parser and synth.
     * Returns a Float32Array of samples at 44100 Hz. Use with get_audio_sample_rate() to create an AudioBuffer.
     * @param {string} notation
     * @returns {Float32Array}
     */
    render_sound(notation) {
        const ptr0 = passStringToWasm0(notation, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.k7web_render_sound(this.__wbg_ptr, ptr0, len0);
        return ret;
    }
    /**
     * Reset all VM state for a new game: palette pico8, camera, clip, draw color, cls, map, sprites.
     * Call once before running new game code (e.g. when user clicks Run or loads another example).
     */
    reset_game_state() {
        wasm.k7web_reset_game_state(this.__wbg_ptr);
    }
    /**
     * Reset map to zeros. Call when loading a new game.
     */
    reset_map() {
        wasm.k7web_reset_map(this.__wbg_ptr);
    }
    /**
     * Reset sprite bank to 256 empty 8×8 sprites. Call when loading a new game.
     */
    reset_sprite_bank() {
        wasm.k7web_reset_sprite_bank(this.__wbg_ptr);
    }
    /**
     * Load DMG wave RAM entries for `dmgwavepreset(n)` (each string: 32 hex nibbles → 16 bytes). Skips invalid entries.
     * @param {Array<any>} hexes
     */
    set_dmg_wave_cart_hexes(hexes) {
        wasm.k7web_set_dmg_wave_cart_hexes(this.__wbg_ptr, hexes);
    }
    /**
     * Set current font by name: "pico8", "bbc", "appleii", "cbmii", "trollmini".
     * @param {string} name
     * @returns {boolean}
     */
    set_font(name) {
        const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.k7web_set_font(this.__wbg_ptr, ptr0, len0);
        return ret !== 0;
    }
    /**
     * Set full map from bytes. 256×32 = cells only; 256×32×2 = cells then flags.
     * @param {Uint8Array} data
     */
    set_map(data) {
        const ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.k7web_set_map(this.__wbg_ptr, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * Set full map flags from bytes (256×32 row-major).
     * @param {Uint8Array} data
     */
    set_map_flags(data) {
        const ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.k7web_set_map_flags(this.__wbg_ptr, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * Set full sprite sheet from bytes (256×64 row-major, palette indices). For loading shared game state.
     * @param {Uint8Array} data
     */
    set_sprite_sheet(data) {
        const ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.k7web_set_sprite_sheet(this.__wbg_ptr, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * Sprite: get palette index at sheet pixel (sx, sy). Sheet is 256×64 (32×8 sprites of 8×8).
     * @param {number} sx
     * @param {number} sy
     * @returns {number}
     */
    sget(sx, sy) {
        const ret = wasm.k7web_sget(this.__wbg_ptr, sx, sy);
        return ret;
    }
    /**
     * Sprite: draw sprite n at (x, y). w, h in sprite units (1 = 8px). flip_x, flip_y: 0 or 1. scale: 1 = 8px per tile, 2 = 16px, etc. (optional, default 1).
     * @param {number} n
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @param {number} flip_x
     * @param {number} flip_y
     * @param {number} scale
     */
    spr(n, x, y, w, h, flip_x, flip_y, scale) {
        wasm.k7web_spr(this.__wbg_ptr, n, x, y, w, h, flip_x, flip_y, scale);
    }
    /**
     * Sprite: set sheet pixel (sx, sy) to palette color.
     * @param {number} sx
     * @param {number} sy
     * @param {number} col
     */
    sset(sx, sy, col) {
        wasm.k7web_sset(this.__wbg_ptr, sx, sy, col);
    }
    /**
     * Palette: switch to named palette (e.g. "pico8", "gameboy", "cga", "commodore64", "atari2600").
     * @param {string} name
     */
    switch_palette(name) {
        const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.k7web_switch_palette(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Run one frame of the embedded default demo (uses gfx: cls, rect, circ, line, print).
     * Call from a requestAnimationFrame loop together with draw_to_canvas.
     */
    tick_default_demo() {
        wasm.k7web_tick_default_demo(this.__wbg_ptr);
    }
    /**
     * WebSocket: connect to URL (e.g. ws://localhost:8080 or wss://…).
     * @param {string} url
     */
    ws_connect(url) {
        const ptr0 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.k7web_ws_connect(this.__wbg_ptr, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * WebSocket: true if connected (ready state OPEN).
     * @returns {boolean}
     */
    ws_connected() {
        const ret = wasm.k7web_ws_connected(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * WebSocket: send a text message. No-op if not connected.
     * @param {string} msg
     */
    ws_send(msg) {
        const ptr0 = passStringToWasm0(msg, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.k7web_ws_send(this.__wbg_ptr, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * WebSocket: take all received messages (empties the queue). Returns JS array of strings.
     * @returns {Array<any>}
     */
    ws_take_messages() {
        const ret = wasm.k7web_ws_take_messages(this.__wbg_ptr);
        return ret;
    }
}
if (Symbol.dispose) K7Web.prototype[Symbol.dispose] = K7Web.prototype.free;

export function run() {
    wasm.run();
}

function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg___wbindgen_is_string_7ef6b97b02428fae: function(arg0) {
            const ret = typeof(arg0) === 'string';
            return ret;
        },
        __wbg___wbindgen_is_undefined_52709e72fb9f179c: function(arg0) {
            const ret = arg0 === undefined;
            return ret;
        },
        __wbg___wbindgen_string_get_395e606bd0ee4427: function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'string' ? obj : undefined;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_throw_6ddd609b62940d55: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg__wbg_cb_unref_6b5b6b8576d35cb1: function(arg0) {
            arg0._wbg_cb_unref();
        },
        __wbg_data_a3d9ff9cdd801002: function(arg0) {
            const ret = arg0.data;
            return ret;
        },
        __wbg_document_c0320cd4183c6d9b: function(arg0) {
            const ret = arg0.document;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_getContext_f04bf8f22dcb2d53: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.getContext(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_getElementById_d1f25d287b19a833: function(arg0, arg1, arg2) {
            const ret = arg0.getElementById(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_get_a8ee5c45dabc1b3b: function(arg0, arg1) {
            const ret = arg0[arg1 >>> 0];
            return ret;
        },
        __wbg_instanceof_CanvasRenderingContext2d_08b9d193c22fa886: function(arg0) {
            let result;
            try {
                result = arg0 instanceof CanvasRenderingContext2D;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_HtmlCanvasElement_26125339f936be50: function(arg0) {
            let result;
            try {
                result = arg0 instanceof HTMLCanvasElement;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Window_23e677d2c6843922: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Window;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_length_b3416cf66a5452c8: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_new_a70fbab9066b301f: function() {
            const ret = new Array();
            return ret;
        },
        __wbg_new_dd50bcc3f60ba434: function() { return handleError(function (arg0, arg1) {
            const ret = new WebSocket(getStringFromWasm0(arg0, arg1));
            return ret;
        }, arguments); },
        __wbg_new_from_slice_ff2c15e8e05ffdfc: function(arg0, arg1) {
            const ret = new Float32Array(getArrayF32FromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_new_with_u8_clamped_array_and_sh_5d9be5b17e50951c: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = new ImageData(getClampedArrayU8FromWasm0(arg0, arg1), arg2 >>> 0, arg3 >>> 0);
            return ret;
        }, arguments); },
        __wbg_push_e87b0e732085a946: function(arg0, arg1) {
            const ret = arg0.push(arg1);
            return ret;
        },
        __wbg_putImageData_1750176f4dd07174: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            arg0.putImageData(arg1, arg2, arg3);
        }, arguments); },
        __wbg_readyState_1f1e7f1bdf9f4d42: function(arg0) {
            const ret = arg0.readyState;
            return ret;
        },
        __wbg_send_4a1dc66e8653e5ed: function() { return handleError(function (arg0, arg1, arg2) {
            arg0.send(getStringFromWasm0(arg1, arg2));
        }, arguments); },
        __wbg_set_onmessage_6f80ab771bf151aa: function(arg0, arg1) {
            arg0.onmessage = arg1;
        },
        __wbg_static_accessor_GLOBAL_8adb955bd33fac2f: function() {
            const ret = typeof global === 'undefined' ? null : global;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_GLOBAL_THIS_ad356e0db91c7913: function() {
            const ret = typeof globalThis === 'undefined' ? null : globalThis;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_SELF_f207c857566db248: function() {
            const ret = typeof self === 'undefined' ? null : self;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_WINDOW_bb9f1ba69d61b386: function() {
            const ret = typeof window === 'undefined' ? null : window;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbindgen_cast_0000000000000001: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { dtor_idx: 2, function: Function { arguments: [NamedExternref("MessageEvent")], shim_idx: 3, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__hfc7063eae4b4a158, wasm_bindgen__convert__closures_____invoke__hf13be2dcec922e36);
            return ret;
        },
        __wbindgen_cast_0000000000000002: function(arg0, arg1) {
            // Cast intrinsic for `Ref(String) -> Externref`.
            const ret = getStringFromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
        },
    };
    return {
        __proto__: null,
        "./k7_web_bg.js": import0,
    };
}

function wasm_bindgen__convert__closures_____invoke__hf13be2dcec922e36(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__hf13be2dcec922e36(arg0, arg1, arg2);
}

const K7WebFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_k7web_free(ptr >>> 0, 1));

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => state.dtor(state.a, state.b));

function getArrayF32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getFloat32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

function getClampedArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ClampedArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

let cachedFloat32ArrayMemory0 = null;
function getFloat32ArrayMemory0() {
    if (cachedFloat32ArrayMemory0 === null || cachedFloat32ArrayMemory0.byteLength === 0) {
        cachedFloat32ArrayMemory0 = new Float32Array(wasm.memory.buffer);
    }
    return cachedFloat32ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(ptr, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

let cachedUint8ClampedArrayMemory0 = null;
function getUint8ClampedArrayMemory0() {
    if (cachedUint8ClampedArrayMemory0 === null || cachedUint8ClampedArrayMemory0.byteLength === 0) {
        cachedUint8ClampedArrayMemory0 = new Uint8ClampedArray(wasm.memory.buffer);
    }
    return cachedUint8ClampedArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            state.a = a;
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            state.dtor(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8ArrayMemory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasm;
function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    wasmModule = module;
    cachedDataViewMemory0 = null;
    cachedFloat32ArrayMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    cachedUint8ClampedArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = module.ok && expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('k7_web_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
