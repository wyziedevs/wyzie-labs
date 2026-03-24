# Drone Frame V1: Full Build White Paper

5-inch PA12-CF FPV freestyle / racing performance frame. Single-piece unibody with integrated camera mount. This document covers everything: printing, sourcing, assembly, electronics, tuning, and maiden flight.

---

## 1. Frame Specifications

| Spec                  | Value                             |
| --------------------- | --------------------------------- |
| Class                 | 5-inch                            |
| Geometry              | True-X, 220 mm motor-to-motor     |
| Material              | PA12-CF (Nylon 12 + Carbon Fiber) |
| Construction          | Single-piece unibody              |
| Frame weight (target) | < 95 g                            |
| Arm style             | Open triangular truss / lattice   |
| Stack mount           | 30.5×30.5 mm (M3)                 |
| Motor mount pattern   | 16×16 mm (M3)                     |
| Motor class           | 22xx–23xx                         |
| Camera mount          | Integrated, fixed 25° tilt        |
| Prop size             | 5" (5040, 5045, 5146, 51466)      |

---

## 2. Bill of Materials

### 2.1 Printed Parts

One print. One piece. No assembly bolts for the frame itself.

| Part          | Qty | Est. Weight | Notes                                                                                                       |
| ------------- | --- | ----------- | ----------------------------------------------------------------------------------------------------------- |
| Unibody frame | 1   | ~90 g       | Frame, arms, and camera mount in one piece. Truss arms, integrated battery strap slots, 30.5 mm stack posts |

### 2.2 Hardware (Stainless Steel)

| Item                              | Qty | Size             |
| --------------------------------- | --- | ---------------- |
| Standoffs (FC/ESC stack)          | 4   | M3×25 mm         |
| Locknuts (standoff bottoms)       | 4   | M3               |
| Nylon locknuts (standoff tops)    | 4   | M3               |
| Motor screws                      | 16  | M3×6–8 mm        |
| Rubber grommets / TPU soft-mounts | 4   | fits M3 standoff |

### 2.3 Electronics (Recommended)

This is a starting point. Swap based on preference and budget.

| Component         | Recommendation                                   | Notes                                   |
| ----------------- | ------------------------------------------------ | --------------------------------------- |
| Motors            | EMAX Eco II 2207 1700KV (6S) or 2400KV (4S)      | 16×16 mount, M3 screws                  |
| ESC               | 30–35A 4-in-1 (BLHeli_32 or AM32)                | 30.5×30.5 mount                         |
| Flight controller | F405 or F722 w/ Betaflight                       | 30.5×30.5 mount, barometer nice-to-have |
| VTX               | 25–600 mW adjustable (analog) or DJI O3 / HDZero | Check stack height                      |
| Camera            | DJI O3 cam, Caddx Ratel 2, or HDZero Micro V3    | Standard micro size                     |
| Receiver          | ELRS 2.4 GHz (recommended)                       | Zip-tie or tape to rear of frame        |
| Antenna           | RHCP stubby or Immortal-T                        | Route away from carbon/nylon            |
| Battery           | 1100–1500 mAh 6S (or 1300–1800 mAh 4S)           | Sits on top, held by strap              |
| Props             | HQProp 5040 or Gemfan 51466                      | 5040 for efficiency, 51466 for thrust   |
| Battery strap     | 250×20 mm non-slip rubber strap                  | Route through integrated frame slots    |

### 2.4 Tools & Supplies

- Hex driver: 2.0 mm (M3)
- Soldering iron (fine tip, 350–380°C)
- Rosin-core solder (60/40 or lead-free)
- Heatshrink tubing (assorted)
- Blue thread-locker (Loctite 242 or equivalent)
- Double-sided foam tape (FC mounting)
- Zip ties (small, 100 mm)
- Wire (20 AWG silicone for battery lead, 26 AWG for signal)
- XT60 connector (battery side)
- Multimeter

---

## 3. Printing Guide

### 3.1 Printer Requirements

PA12-CF requires:

- **Enclosed chamber**: warping is severe without it. Chamber temp 50–60°C ideal.
- **Hardened nozzle**: carbon fiber destroys brass. Use hardened steel or tungsten carbide.
- **All-metal hotend**: PTFE-lined hotends cap out around 240°C. You need 270–290°C.
- **Dry filament**: PA12-CF absorbs moisture aggressively. Print from a dry box or dry at 80°C for 6–8 hours before use.

Recommended printers: Bambu X1C, Bambu P1S (with enclosure), Prusa XL (enclosed), Voron 2.4 (enclosed).

### 3.2 Print Settings

| Setting           | Value                                                     |
| ----------------- | --------------------------------------------------------- |
| Nozzle temp       | 270–285°C                                                 |
| Bed temp          | 80–90°C                                                   |
| Chamber temp      | 50–60°C (if controllable)                                 |
| Layer height      | 0.2 mm                                                    |
| Line width        | 0.45 mm (0.4 nozzle)                                      |
| Walls             | 4                                                         |
| Top/bottom layers | 5                                                         |
| Infill            | 40–55% gyroid                                             |
| Speed             | 50–70 mm/s                                                |
| Fan               | 0–30% (low; nylon needs slow cooling)                     |
| Bed adhesion      | Glue stick on PEI or textured PEI plate                   |
| Supports          | Yes, minimal. For truss bridges and camera mount overhang |

### 3.3 Orientation & Supports

The frame prints flat, bottom-side down. The open truss arms and integrated camera mount mean some bridging and overhangs exist that wouldn't on a multi-part design.

- **Frame body**: flat on the bed. The bottom surface of the frame contacts the build plate.
- **Truss arm bridges**: the triangular lattice cutouts in the arms create short bridges (~8–12 mm spans). PA12-CF bridges reasonably well at slow speeds. If your printer struggles, add thin tree supports under the truss bridges only.
- **Camera mount overhang**: the integrated camera mount at the front has a 25° angled shelf. Use a small support under the camera cradle. Tree supports work best. Set support angle threshold to ~40° so the slicer only supports the camera area and truss bridges, not the entire frame.
- **Motor mount tabs**: these are at the arm tips and print flat. No supports needed.
- **Stack mount posts**: print upward from the frame body. No supports needed.

Print time estimate: 6–10 hours depending on printer speed and support density.

### 3.4 Post-Processing

1. Let the bed cool to room temperature before removal. PA12-CF bonds hard to PEI when hot.
2. Remove supports carefully. Use flush cutters and a craft knife. PA12-CF supports break away cleaner than regular nylon.
3. Clean up any support nibs on the camera mount and truss bridges with 220 grit sandpaper.
4. Test-fit M3 standoffs in the stack mount holes. Ream with a 3.1 mm drill bit if tight (PA12-CF can shrink slightly).
5. Test-fit motor screws in arm tip holes.
6. Inspect the truss structures on all four arms. Look for under-extruded bridges or layer gaps. If a truss member looks weak, the frame is still flyable but consider reprinting.

---

## 4. Assembly

Since the frame is a single piece, there's no frame assembly step. You go straight to mounting electronics.

### 4.1 Stack Standoffs

1. Thread 4× M3×25 mm standoffs into the frame's 30.5×30.5 mm stack mount holes from the top.
2. Secure from below with M3 locknuts. Snug, not gorilla-tight. You're threading into nylon.
3. Place 4× rubber grommets over the standoffs (these isolate the FC from vibration).

### 4.2 Motor Installation

1. Place a motor on each arm tip's integrated mount. Align M3 holes.
2. Use 4× M3×6–8 mm motor screws per motor. **Check screw depth**: screws that are too long will hit the windings and destroy the motor. With a 2–3 mm deep motor mount thread, M3×8 is typically max.
3. Spin each motor bell by hand after mounting. It should spin freely with zero scraping.
4. Motor direction: Betaflight default is `props-in` (1 and 4 CW, 2 and 3 CCW when viewed top-down). Mark motor positions with a Sharpie for now.

### 4.3 Electronics: ESC

1. Set the 4-in-1 ESC on the standoffs (component side up, solder pads facing down or sideways depending on ESC layout).
2. Route motor wires out toward each arm BEFORE securing. Plan wire paths now. The open truss arms make wire routing easy. Tuck wires along the inner edge of each arm.
3. Secure ESC to standoffs lightly. You'll remove it during soldering.

### 4.4 Soldering

> **Do this on a clean, well-ventilated surface.**

1. Remove the ESC from standoffs. Place on a silicone mat.
2. Tin all motor pads on the ESC.
3. Trim motor wires to length. Leave ~5 mm extra. Strip 3–4 mm of insulation.
4. Tin motor wire ends.
5. Solder motor wires to ESC pads: Motor 1 → ESC M1, Motor 2 → ESC M2, etc. Motor order follows Betaflight motor map (check your FC documentation). Don't worry about spin direction yet. You can swap any two of the three wires per motor to reverse, or just reverse in firmware.
6. Solder battery lead (XT60 pigtail, 14–16 AWG silicone wire) to ESC BAT+ and BAT– pads.
7. Solder receiver signal wire to an available UART TX/RX on the FC (check pinout).
8. Solder VTX power (typically from a 9V or VBAT pad on the FC) and UART.

### 4.5 Stack Assembly

1. Mount ESC back onto standoffs.
2. Add a thin foam pad or rubber O-rings between ESC and FC.
3. Place FC on top. Ensure the arrow on the FC points toward the front of the frame.
4. Secure FC and ESC with 4× M3 nylon locknuts on the standoffs. Hand-tight + 1/4 turn max.

### 4.6 Camera

1. Attach camera directly into the integrated camera mount at the front of the frame. The mount is molded at a fixed 25° tilt.
2. Secure with the camera's included hardware or friction-fit with foam tape. The integrated mount cradles the camera on three sides.

### 4.7 Receiver & Antenna

1. Double-sided tape the receiver to the rear of the frame, or zip-tie it to a rear strut.
2. Route antenna rearward, away from the frame body. Use a zip tie to secure the antenna at a 90° angle from the frame for best signal.
3. If using an Immortal-T antenna, bend the elements to clear the props.

### 4.8 VTX & VTX Antenna

1. Mount VTX in the stack (above FC) or tape to the top of the frame body.
2. Route the VTX antenna out the rear. MMCX/UFL connectors are fragile. Secure the pigtail so it doesn't flex at the connector.
3. Zip-tie the antenna so it points upward and rearward, clear of the prop arcs.

### 4.9 Battery

1. Thread the battery strap through the integrated slots on the frame body.
2. The battery sits on top of the frame. Center it over the CG (roughly over the stack).
3. Cinch the strap tight. A non-slip rubber strap is critical. The open truss design means less surface area for grip.

### 4.10 Final Checks

- [ ] Stack standoff bolts snug with thread-locker
- [ ] All 16 motor screws tight with thread-locker
- [ ] No loose motor wires
- [ ] Props spin freely (no motor scraping)
- [ ] No solder bridges on ESC or FC
- [ ] Battery lead polarity is correct (double-check with multimeter before first plug-in)
- [ ] Antenna clear of prop arcs
- [ ] Camera seated in mount
- [ ] Receiver antenna routed away from carbon/nylon
- [ ] Zip ties trimmed flush
- [ ] Battery strap secure

---

## 5. Firmware & Configuration

### 5.1 Betaflight Setup

1. Connect FC to computer via USB. Open Betaflight Configurator.
2. Flash latest stable Betaflight firmware for your FC target.
3. **Ports tab**: Enable Serial RX on the UART connected to your receiver. Enable peripherals on the VTX UART if using SmartAudio/Tramp.
4. **Configuration tab**:
   - Mixer: Quad X
   - ESC/Motor protocol: DShot600 (or DShot300 for 4K PID loop)
   - Motor direction: check `props-in` or `props-out` per your preference
   - Receiver: Serial, protocol CRSF (for ELRS)
5. **Motors tab**: Spin up each motor **without props** to verify motor order and direction. Reverse in software if needed.
6. **Receiver tab**: Verify stick inputs move the correct channels (Roll, Pitch, Yaw, Throttle). Set endpoints/midpoints.
7. **PID Tuning tab**: Start with Betaflight defaults. They're solid for 5-inch quads. After maiden, tune from there.
8. **Modes tab**: Assign at minimum:
   - ARM (a switch)
   - ANGLE or HORIZON (a switch, for recovery)
   - BEEPER (a switch)
   - FLIP OVER AFTER CRASH / turtle mode (optional but recommended)
9. **OSD tab**: Enable battery voltage, flight time, RSSI, and warnings at minimum.

### 5.2 ELRS Receiver Binding

1. Power the receiver (plug in battery or USB, depending on FC power config).
2. Put receiver into bind mode (typically 3 quick power cycles, or button press; check ELRS docs).
3. Put your ELRS transmitter module into bind mode.
4. Should bind within seconds. Verify in Betaflight Receiver tab.

### 5.3 VTX Configuration

1. Via SmartAudio/Tramp (in Betaflight OSD or Lua script on radio): set power, channel, band.
2. Start at 25 mW for bench testing. Increase for field use.
3. Verify video feed on goggles before flying.

---

## 6. Pre-Flight

### 6.1 First Power-Up (No Props)

1. **Remove all props.** Non-negotiable.
2. Plug in battery.
3. Listen for ESC startup tones (confirms ESC ↔ FC communication).
4. Check motor spin in Betaflight Motors tab.
5. Verify receiver link (arm/disarm via switch).
6. Check VTX video feed.
7. If anything is wrong, unplug immediately and debug.

### 6.2 Props On: Final Checks

1. Mount props: CW on motors 1 & 4, CCW on motors 2 & 3 (Betaflight default). Match prop markings to motor direction.
2. Tighten prop nuts fully. PA12-CF motor mounts are stiff but props-off events happen with loose nuts.
3. Set quad on ground, step back 5+ meters.
4. Arm, give a short throttle blip, disarm. Verify it wants to lift evenly.
5. If it flips on throttle-up: motor order or direction is wrong. Unplug, re-check in Betaflight.

---

## 7. Maiden Flight

1. Pick an open field, no people nearby.
2. Fly in ANGLE mode first if you're not confident in ACRO. Hover at 1–2 meters for 30 seconds.
3. Listen for vibrations. PA12-CF transmits sound differently than carbon plate frames. The open truss arms may resonate slightly. Some motor hum is normal.
4. Land, check for hot motors (warm is OK; too-hot-to-touch means PIDs are fighting or props are wrong).
5. Check motor screws and stack standoffs after maiden. Nylon can settle under vibration on first flights.
6. If everything looks good, switch to ACRO and fly.

---

## 8. PA12-CF Specific Notes

- **Moisture**: PA12-CF absorbs water from air. Store the printed frame in a sealed bag with desiccant if you're in a humid climate. Wet nylon loses ~20% of its strength.
- **UV**: Nylon degrades with prolonged UV exposure. Not a major concern for a drone (short flights) but don't leave it in direct sun for days.
- **Impact behavior**: Unlike carbon fiber plate, PA12-CF absorbs impacts by flexing rather than shattering. The truss arms may deform on hard crashes instead of snapping clean. Bend back gently with a heat gun (150°C) if minor. Reprint the whole frame if a truss member cracks. It's one piece, so there are no individual arm replacements.
- **Thread-locker is mandatory.** Nylon vibrates out bolts faster than carbon plate frames. Blue Loctite on every bolt.
- **Weight trade-off**: PA12-CF unibody frame (~95 g) will be heavier than a milled carbon fiber frame (~60–80 g). You trade weight for printability, simplicity, and zero lead time on replacements.
- **Annealing (optional)**: Baking the printed frame at 80–90°C for 2 hours post-print can relieve internal stresses and improve dimensional stability. Do this before mounting electronics.
- **Crash replacement.** Since it's a single piece, any structural failure means reprinting the whole frame. Keep 1–2 spares printed and ready. The upside is no hunting for the right replacement arm or plate. Just swap the whole thing.

---

## 9. Troubleshooting

| Problem                       | Likely Cause                                         | Fix                                                          |
| ----------------------------- | ---------------------------------------------------- | ------------------------------------------------------------ |
| Truss arm snaps on crash      | Layer adhesion failure or under-extrusion on bridges | Reprint at higher temp, slower speed, check filament dryness |
| Vibrations / jello in video   | Soft-mounts missing or FC not isolated               | Add grommets, check motor balance, tighten props             |
| Motor doesn't spin            | Bad solder joint or ESC pad burned                   | Reflow solder, check continuity                              |
| Quad flips on arm             | Motor order or direction wrong                       | Verify in Betaflight Motors tab (no props!)                  |
| Weak signal / failsafe        | Antenna blocked by frame                             | Re-route antenna, ensure RHCP orientation                    |
| Battery sag under throttle    | Battery too small or old                             | Use higher C-rating pack or fresh cells                      |
| Bolts loosening after flights | No thread-locker                                     | Apply blue Loctite to all M3 bolts                           |
| Camera vibration in mount     | Integrated mount resonance                           | Add thin foam tape between camera and mount                  |
| Battery shifting in flight    | Strap not tight or slick surface                     | Use non-slip rubber strap, add grip tape to frame top        |

---

## 10. Recommended Spares

Keep printed: 1–2 complete spare frames. Since it's a unibody, you can't replace individual arms. The trade-off for simplicity is that a crash bad enough to break an arm means reprinting the whole thing. At ~6–10 hours per print, having a backup ready means you're flying again immediately.

Keep in your bag: spare M3 standoffs, motor screws, zip ties, spare props, XT60 pigtail, pre-tinned wire, battery strap.
