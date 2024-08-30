"use client";

import { DURATION, PLAY_TIME, PLAYSTATION_TYPE } from "@/constant/form";
import { Input, DatePicker, Select, SelectItem } from "@nextui-org/react";
import React from "react";
import MagicButton from "./ui/MagicButton";
import { BsBasket3Fill } from "react-icons/bs";

const FormSection = () => {
  return (
    <section id="form" className="min-h-screen ">
      <div className="box-border py-16 md:w-1/2 flex flex-col  justify-center  items-center mx-auto">
        <h4 className="text-2xl md:text-3xl font-semibold text-center">
          Buat <span className="text-purple">Reservasi</span> Sekarang, Main
          Tanpa Batas!
        </h4>
        <div className="flex flex-col gap-y-10 my-12 w-full">
          <Input label="Nama" isRequired />
          <Input label="No. WhatsApp" isRequired />
          <Select label="Playstation" items={PLAYSTATION_TYPE} isRequired>
            {PLAYSTATION_TYPE.map(({ label, value }) => (
              <SelectItem key={value}>{label}</SelectItem>
            ))}
          </Select>
          <DatePicker label="Tanggal" isRequired />
          <Select label="Jam Masuk" items={PLAY_TIME} isRequired>
            {PLAY_TIME.map(({ label, value }) => (
              <SelectItem key={value}>{label}</SelectItem>
            ))}
          </Select>
          <Select label="Durasi" items={DURATION} isRequired>
            {DURATION.map(({ label, value }) => (
              <SelectItem key={value}>{label}</SelectItem>
            ))}
          </Select>
          <MagicButton
            title="Reservasi"
            icon={<BsBasket3Fill />}
            position="left"
            radius="full"
            className="!w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default FormSection;
