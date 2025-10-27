"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LeadershipCard({
  name,
  year,
  quote,
  icon,
  rating,
}: {
  name: string;
  year: string;
  quote: string;
  icon: string;
  rating?: number;
}) {
  return (
    <motion.div
