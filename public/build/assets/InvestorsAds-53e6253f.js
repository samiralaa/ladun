import { N as u } from "./Navbar-71337f24.js";
import { I as b } from "./ImgBanner-2e816b82.js";
import { C as v } from "./CardLink-03212ffe.js";
import { L as f } from "./LightFooter-65436c26.js";
import {
    _ as x,
    r as o,
    o as r,
    c,
    a as i,
    b as e,
    w as n,
    F as d,
    m as k,
    d as m,
    t as a,
    e as w,
    q as L,
} from "./main-176d8eac.js";
import "./flowbite-vue-d1278db0.js";
const $ = {
        data() {
            return { investors: [], banner: "" };
        },
        components: { Navbar: u, ImgBanner: b, CardLink: v, LightFooter: f },
        methods: {
            callbanner() {
                axios.get("/api/banners-pages").then((t) => {
                    (this.banner = t.data.pages[2].media[2].original_url),
                        console.log(this.banner);
                });
            },
            getAllInvestors() {
                axios.get("/api/investors").then((t) => {
                    (this.investors = t.data.investors),
                        console.log(this.investors);
                });
            },
        },
        mounted() {
            this.getAllInvestors(), this.callbanner();
        },
    },
    N = { class: "pt-22" },
    y = ["src"],
    C = { class: "media-center py-28 bg-background-section" },
    I = { class: "container mx-auto" },
    B = { class: "grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10" },
    F = { class: "text-sm mb-2" },
    A = ["innerHTML"],
    M = { class: "rtl:text-end ltr:text-end" },
    T = ["onClick"],
    V = ["src"];
function H(t, j, q, z, l, D) {
    const _ = o("Navbar"),
        g = o("img-banner"),
        p = o("card-link"),
        h = o("LightFooter");
    return (
        r(),
        c(
            d,
            null,
            [
                i(_, { class: "bg-black fixed z-50 w-full" }),
                e("div", N, [
                    i(g, null, {
                        text: n(() => [m(a(t.$t("companyAds")), 1)]),
                        default: n(() => [
                            e(
                                "img",
                                {
                                    class: "w-full",
                                    style: { height: "450px" },
                                    src: l.banner,
                                },
                                null,
                                8,
                                y
                            ),
                        ]),
                        _: 1,
                    }),
                ]),
                e("section", C, [
                    e("div", I, [
                        e("div", B, [
                            (r(!0),
                            c(
                                d,
                                null,
                                k(
                                    l.investors,
                                    (s) => (
                                        r(),
                                        w(
                                            p,
                                            { key: s.id },
                                            {
                                                head: n(() => [
                                                    m(
                                                        a(
                                                            s.title[
                                                                t.$i18n.locale
                                                            ]
                                                        ),
                                                        1
                                                    ),
                                                ]),
                                                text: n(() => [
                                                    e(
                                                        "div",
                                                        F,
                                                        a(s.created_at),
                                                        1
                                                    ),
                                                    e(
                                                        "div",
                                                        {
                                                            innerHTML:
                                                                s.content[
                                                                    t.$i18n
                                                                        .locale
                                                                ].slice(
                                                                    0,
                                                                    100
                                                                ) + "...",
                                                        },
                                                        null,
                                                        8,
                                                        A
                                                    ),
                                                    e("div", M, [
                                                        e(
                                                            "button",
                                                            {
                                                                onClick: L(
                                                                    (E) =>
                                                                        t.$router.push(
                                                                            {
                                                                                name: "Investors Relation",
                                                                                params: {
                                                                                    id: s.id,
                                                                                },
                                                                            }
                                                                        ),
                                                                    ["prevent"]
                                                                ),
                                                                class: "p-2 my-2 text-xs rounded-lg text-white bg-dark-brown",
                                                            },
                                                            a(t.$t("readMore")),
                                                            9,
                                                            T
                                                        ),
                                                    ]),
                                                ]),
                                                default: n(() => [
                                                    e(
                                                        "img",
                                                        {
                                                            class: "object-cover img-media-center rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg rtl:pl-2 ltr:pr-2",
                                                            src: s.media[0]
                                                                .original_url,
                                                            alt: "",
                                                        },
                                                        null,
                                                        8,
                                                        V
                                                    ),
                                                ]),
                                                _: 2,
                                            },
                                            1024
                                        )
                                    )
                                ),
                                128
                            )),
                        ]),
                    ]),
                ]),
                i(h),
            ],
            64
        )
    );
}
const P = x($, [["render", H]]);
export { P as default };
