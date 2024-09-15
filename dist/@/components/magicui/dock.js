"use client";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import React, { useRef } from "react";
import { cva } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";
var DEFAULT_MAGNIFICATION = 60;
var DEFAULT_DISTANCE = 140;
var dockVariants = cva("mx-auto w-max mt-8 h-[58px] p-2 flex gap-2 rounded-2xl border supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md");
var Dock = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, _b = _a.magnification, magnification = _b === void 0 ? DEFAULT_MAGNIFICATION : _b, _c = _a.distance, distance = _c === void 0 ? DEFAULT_DISTANCE : _c, _d = _a.direction, direction = _d === void 0 ? "bottom" : _d, props = __rest(_a, ["className", "children", "magnification", "distance", "direction"]);
    var mouseX = useMotionValue(Infinity);
    var renderChildren = function () {
        return React.Children.map(children, function (child) {
            return React.cloneElement(child, {
                mouseX: mouseX,
                magnification: magnification,
                distance: distance,
            });
        });
    };
    return (_jsx(motion.div, __assign({ ref: ref, onMouseMove: function (e) { return mouseX.set(e.pageX); }, onMouseLeave: function () { return mouseX.set(Infinity); } }, props, { className: cn(dockVariants({ className: className }), {
            "items-start": direction === "top",
            "items-center": direction === "middle",
            "items-end": direction === "bottom",
        }), children: renderChildren() })));
});
Dock.displayName = "Dock";
var DockIcon = function (_a) {
    var size = _a.size, _b = _a.magnification, magnification = _b === void 0 ? DEFAULT_MAGNIFICATION : _b, _c = _a.distance, distance = _c === void 0 ? DEFAULT_DISTANCE : _c, mouseX = _a.mouseX, className = _a.className, children = _a.children, props = __rest(_a, ["size", "magnification", "distance", "mouseX", "className", "children"]);
    var ref = useRef(null);
    var distanceCalc = useTransform(mouseX, function (val) {
        var _a, _b;
        var bounds = (_b = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) !== null && _b !== void 0 ? _b : { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });
    var widthSync = useTransform(distanceCalc, [-distance, 0, distance], [40, magnification, 40]);
    var width = useSpring(widthSync, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    return (_jsx(motion.div, __assign({ ref: ref, style: { width: width }, className: cn("flex aspect-square cursor-pointer items-center justify-center rounded-full", className) }, props, { children: children })));
};
DockIcon.displayName = "DockIcon";
export { Dock, DockIcon, dockVariants };
