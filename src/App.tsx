import { useState } from "react";

const assetPathPrefix = "/assets";

const imgTrailThumbStep1 = `${assetPathPrefix}/2c548.png`;
const imgLineStep1Stepper = `${assetPathPrefix}/06a7b.svg`;
const imgDivider = `${assetPathPrefix}/0de77.svg`;

const imgTrailThumbStep2 = `${assetPathPrefix}/9f657.png`;
const imgTrailPhotoLarge = `${assetPathPrefix}/69f93.png`;
const imgCheck = `${assetPathPrefix}/2bcab.svg`;
const imgLineStep2Stepper = `${assetPathPrefix}/652a6.svg`;
const imgClock = `${assetPathPrefix}/3e578.svg`;

function SectionDivider() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]">
        <img alt="" className="block max-w-none size-full" src={imgDivider} />
      </div>
    </div>
  );
}

function SharedHeader() {
  return (
    <div className="bg-[#13201a] flex h-[80px] items-center justify-between px-[64px] py-[16px] shrink-0 w-full">
      <div className="flex gap-[12px] items-center shrink-0">
        <div className="bg-[#dceb6b] flex flex-col items-center justify-center rounded-[20px] shrink-0 size-[40px]">
          <p className="font-['Outfit:ExtraBold'] font-extrabold leading-[normal] shrink-0 text-[#13201a] text-[20px] whitespace-nowrap">
            N
          </p>
        </div>
        <p className="font-['Outfit:ExtraBold'] font-extrabold leading-[normal] shrink-0 text-[24px] text-white whitespace-nowrap">
          NativaTrips
        </p>
      </div>
      <div className="flex gap-[32px] items-center shrink-0 text-[15px] whitespace-nowrap leading-[normal]">
        <p className="font-['Inter:Semi_Bold'] font-semibold shrink-0 text-white">Senderos</p>
        <p className="font-['Inter:Medium'] font-medium shrink-0 text-[rgba(255,255,255,0.8)]">Destinos</p>
        <p className="font-['Inter:Medium'] font-medium shrink-0 text-[rgba(255,255,255,0.8)]">Sobre nosotros</p>
        <p className="font-['Inter:Medium'] font-medium shrink-0 text-[rgba(255,255,255,0.8)]">Blog</p>
      </div>
      <div className="border border-[rgba(255,255,255,0.2)] border-solid flex items-start px-[20px] py-[10px] rounded-[100px] shrink-0 cursor-pointer">
        <p className="font-['Inter:Semi_Bold'] font-semibold leading-[normal] shrink-0 text-[14px] text-white whitespace-nowrap">
          Mi cuenta
        </p>
      </div>
    </div>
  );
}

function TrailContextBar() {
  return (
    <div className="bg-[#0e1c15] flex items-center justify-between px-[64px] py-[16px] shrink-0 w-full">
      <div className="flex gap-[16px] items-center shrink-0">
        <div className="h-[48px] relative rounded-[8px] shrink-0 w-[64px]">
          <img
            alt="Sendero Lagunas de Siecha"
            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full"
            src={imgTrailThumbStep1}
          />
        </div>
        <div className="flex flex-col gap-[4px] items-start shrink-0 leading-[normal] whitespace-nowrap">
          <p className="font-['Outfit:Bold'] font-bold shrink-0 text-[18px] text-white">
            Sendero Lagunas de Siecha
          </p>
          <p className="font-['Inter:Regular'] font-normal shrink-0 text-[13px] text-[rgba(255,255,255,0.8)]">
            PNN Chingaza, Colombia
          </p>
        </div>
      </div>
      <div className="flex gap-[32px] items-center shrink-0">
        <div className="flex flex-col gap-[2px] items-end leading-[normal] shrink-0 whitespace-nowrap">
          <p className="font-['Inter:Regular'] font-normal shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] uppercase">
            Fecha seleccionada
          </p>
          <p className="font-['Inter:Semi_Bold'] font-semibold shrink-0 text-[14px] text-white">
            Sáb 14 Dic 2025
          </p>
        </div>
        <div className="bg-[rgba(220,235,107,0.13)] border border-[#dceb6b] border-solid flex items-start px-[12px] py-[6px] rounded-[6px] shrink-0">
          <p className="font-['Inter:Bold'] font-bold leading-[normal] shrink-0 text-[#dceb6b] text-[13px] whitespace-nowrap">
            6 cupos disponibles
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionEyebrow({ label }: { label: string }) {
  return (
    <div className="flex flex-col gap-[8px] items-start shrink-0 w-full">
      <p className="font-['Outfit:ExtraBold'] font-extrabold leading-[normal] shrink-0 text-[#13201a] text-[13px] uppercase w-full">
        {label}
      </p>
      <SectionDivider />
    </div>
  );
}

interface InputFieldProps {
  label: string;
  value: string;
}

function InputField({ label, value }: InputFieldProps) {
  return (
    <div className="flex flex-1 flex-col gap-[4px] items-start min-w-0">
      <p className="font-['Inter:Semi_Bold'] font-semibold leading-[normal] shrink-0 text-[#5e6c64] text-[12px] whitespace-nowrap">
        {label}
      </p>
      <div className="border-[#e2e8df] border-b border-solid flex items-start pb-[8px] w-full">
        <p className="font-['Inter:Medium'] font-medium leading-[normal] shrink-0 text-[#0e1c15] text-[16px] whitespace-nowrap">
          {value}
        </p>
      </div>
    </div>
  );
}

function Step1({ onNext }: { onNext: () => void }) {
  const [memberCount, setMemberCount] = useState(3);
  const [transport, setTransport] = useState(true);
  const [lunch, setLunch] = useState(true);

  const members = Array.from({ length: Math.max(0, memberCount - 1) }, (_, i) => i + 2);

  const memberData = [
    { name: "María Camila Restrepo", doc: "C.C. 1.032.489.112" },
    { name: "Mateo Mora Restrepo", doc: "T.I. 1.109.845.221" },
    { name: "", doc: "" },
    { name: "", doc: "" },
    { name: "", doc: "" },
  ];

  return (
    <div className="bg-[#f5f1e7] flex flex-col items-start w-full min-h-screen">
      <SharedHeader />
      <TrailContextBar />

      {/* Progress Stepper */}
      <div className="flex flex-col items-start pb-[24px] pt-[40px] px-[64px] shrink-0 w-full">
        <div className="flex gap-[16px] items-center w-full">
          {/* Step 1 - active */}
          <div className="flex flex-1 gap-[12px] items-center min-w-0">
            <div className="bg-[#dceb6b] flex items-center justify-center rounded-[16px] shrink-0 size-[32px]">
              <p className="font-['Outfit:ExtraBold'] font-extrabold leading-[normal] shrink-0 text-[#13201a] text-[15px] whitespace-nowrap">
                1
              </p>
            </div>
            <p className="font-['Outfit:Bold'] font-bold leading-[normal] shrink-0 text-[#13201a] text-[16px] whitespace-nowrap">
              1 Datos del grupo
            </p>
            <div className="flex-1 h-0 min-w-0 relative">
              <div className="absolute inset-[-2px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLineStep1Stepper} />
              </div>
            </div>
          </div>
          {/* Step 2 - inactive */}
          <div className="flex gap-[12px] items-center shrink-0 w-[320px]">
            <div className="bg-transparent border border-[#5e6c64] border-solid flex items-center justify-center rounded-[16px] shrink-0 size-[32px]">
              <p className="font-['Outfit:ExtraBold'] font-extrabold leading-[normal] shrink-0 text-[#5e6c64] text-[15px] whitespace-nowrap">
                2
              </p>
            </div>
            <p className="font-['Outfit:Medium'] font-medium leading-[normal] shrink-0 text-[#5e6c64] text-[16px] whitespace-nowrap">
              2 Confirmar reserva
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center pb-[80px] px-[64px] w-full">
        <div className="bg-white shadow-[0px_12px_12px_rgba(19,32,26,0.05)] flex flex-col gap-[36px] items-start p-[48px] rounded-[24px] w-[880px] max-w-full">

          {/* Section: Titular de la Reserva */}
          <div className="flex flex-col gap-[24px] items-start w-full">
            <SectionEyebrow label="Titular de la Reserva" />
            <div className="flex flex-col gap-[20px] items-start w-full">
              <div className="flex gap-[24px] items-start w-full">
                <InputField label="Nombre completo" value="Juan Sebastián Mora" />
                <InputField label="Correo electrónico" value="juan.mora@example.com" />
              </div>
              <div className="flex gap-[24px] items-start w-full">
                <InputField label="Teléfono / WhatsApp" value="+57 312 456 7890" />
                <InputField label="Documento de identidad" value="C.C. 1.018.452.339" />
              </div>
            </div>
          </div>

          {/* Section: Grupo de Visitantes */}
          <div className="flex flex-col gap-[24px] items-start w-full">
            <SectionEyebrow label="Grupo de Visitantes" />
            {/* Counter */}
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col gap-[2px] items-start leading-[normal] shrink-0 whitespace-nowrap">
                <p className="font-['Inter:Semi_Bold'] font-semibold shrink-0 text-[#0e1c15] text-[15px]">
                  Número de integrantes
                </p>
                <p className="font-['Inter:Regular'] font-normal shrink-0 text-[#5e6c64] text-[13px]">
                  Incluye al titular de la reserva
                </p>
              </div>
              <div className="flex gap-[16px] items-center shrink-0">
                <button
                  onClick={() => setMemberCount(c => Math.max(1, c - 1))}
                  className="bg-[#f5f1e7] flex items-center justify-center rounded-[20px] size-[40px] cursor-pointer"
                >
                  <p className="font-['Outfit:Bold'] font-bold leading-[normal] text-[#13201a] text-[20px]">–</p>
                </button>
                <p className="font-['Outfit:ExtraBold'] font-extrabold leading-[normal] text-[#13201a] text-[22px] whitespace-nowrap">
                  {memberCount}
                </p>
                <button
                  onClick={() => setMemberCount(c => Math.min(8, c + 1))}
                  className="bg-[#f5f1e7] flex items-center justify-center rounded-[20px] size-[40px] cursor-pointer"
                >
                  <p className="font-['Outfit:Bold'] font-bold leading-[normal] text-[#13201a] text-[20px]">+</p>
                </button>
              </div>
            </div>
            {/* Additional Members */}
            {members.length > 0 && (
              <div className="flex flex-col gap-[16px] items-start w-full">
                {members.map((num, i) => (
                  <div key={num} className="flex gap-[24px] items-start py-[12px] w-full">
                    <p className="font-['Outfit:Bold'] font-bold leading-[normal] shrink-0 text-[#13201a] text-[15px] w-[120px]">
                      Integrante {num}
                    </p>
                    <InputField
                      label="Nombre completo"
                      value={memberData[i]?.name || ""}
                    />
                    <InputField
                      label="Documento de identidad"
                      value={memberData[i]?.doc || ""}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section: Requerimientos Especiales */}
          <div className="flex flex-col gap-[24px] items-start w-full">
            <SectionEyebrow label="Requerimientos Especiales" />
            {/* Textarea */}
            <div className="flex flex-col gap-[6px] items-start w-full">
              <p className="font-['Inter:Semi_Bold'] font-semibold leading-[normal] shrink-0 text-[#5e6c64] text-[12px] whitespace-nowrap">
                Comentarios / Observaciones
              </p>
              <div className="border border-[#e2e8df] border-solid flex h-[96px] items-start p-[16px] rounded-[8px] w-full">
                <p className="font-['Inter:Regular'] font-normal leading-[normal] shrink-0 text-[#5e6c64] text-[14px] whitespace-nowrap">
                  Alergias, condiciones médicas, necesidades de accesibilidad...
                </p>
              </div>
            </div>
            {/* Checkboxes */}
            <div className="flex flex-col gap-[16px] items-start w-full">
              <label className="flex gap-[12px] items-center cursor-pointer">
                <div
                  onClick={() => setTransport(v => !v)}
                  className="border-2 border-[#13201a] border-solid flex items-center justify-center rounded-[4px] shrink-0 size-[20px] cursor-pointer"
                >
                  {transport && <div className="bg-[#dceb6b] rounded-[1px] size-[10px]" />}
                </div>
                <p className="font-['Inter:Medium'] font-medium leading-[normal] text-[#0e1c15] text-[14px] whitespace-nowrap">
                  Requiero transporte desde Bogotá (+$45.000 COP / persona)
                </p>
              </label>
              <label className="flex gap-[12px] items-center cursor-pointer">
                <div
                  onClick={() => setLunch(v => !v)}
                  className="border-2 border-[#13201a] border-solid flex items-center justify-center rounded-[4px] shrink-0 size-[20px] cursor-pointer"
                >
                  {lunch && <div className="bg-[#dceb6b] rounded-[1px] size-[10px]" />}
                </div>
                <p className="font-['Inter:Medium'] font-medium leading-[normal] text-[#0e1c15] text-[14px] whitespace-nowrap">
                  Incluir almuerzo de campo (+$25.000 COP / persona)
                </p>
              </label>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between w-full">
            <button className="font-['Outfit:Bold'] font-bold leading-[normal] text-[#13201a] text-[15px] underline [text-underline-position:from-font] [text-decoration-style:solid] whitespace-nowrap cursor-pointer bg-transparent border-none p-0">
              Cancelar
            </button>
            <button
              onClick={onNext}
              className="bg-[#dceb6b] flex items-center justify-center px-[28px] py-[16px] rounded-[100px] cursor-pointer border-none"
            >
              <p className="font-['Outfit:Bold'] font-bold leading-[normal] text-[#13201a] text-[16px] whitespace-nowrap">
                Continuar al resumen ↗
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step2({ onBack }: { onBack: () => void }) {
  const [timeLeft] = useState("14:32");

  return (
    <div className="bg-[#f5f1e7] flex flex-col items-start w-full min-h-screen">
      <SharedHeader />

      {/* Trail Context Bar (Step 2 variant) */}
      <div className="bg-[#0e1c15] flex items-center justify-between px-[64px] py-[16px] shrink-0 w-full">
        <div className="flex gap-[16px] items-center shrink-0">
          <div className="h-[48px] relative rounded-[8px] shrink-0 w-[64px]">
            <img
              alt="Sendero Lagunas de Siecha"
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full"
              src={imgTrailThumbStep2}
            />
          </div>
          <div className="flex flex-col gap-[4px] items-start shrink-0 leading-[normal] whitespace-nowrap">
            <p className="font-['Outfit:Bold'] font-bold shrink-0 text-[18px] text-white">
              Sendero Lagunas de Siecha
            </p>
            <p className="font-['Inter:Regular'] font-normal shrink-0 text-[13px] text-[rgba(255,255,255,0.8)]">
              PNN Chingaza, Colombia
            </p>
          </div>
        </div>
        <div className="flex gap-[32px] items-center shrink-0">
          <div className="flex flex-col gap-[2px] items-end leading-[normal] shrink-0 whitespace-nowrap">
            <p className="font-['Inter:Regular'] font-normal shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] uppercase">
              Fecha seleccionada
            </p>
            <p className="font-['Inter:Semi_Bold'] font-semibold shrink-0 text-[14px] text-white">
              Sáb 14 Dic 2025
            </p>
          </div>
          <div className="bg-[rgba(220,235,107,0.13)] border border-[#dceb6b] border-solid flex items-start px-[12px] py-[6px] rounded-[6px] shrink-0">
            <p className="font-['Inter:Bold'] font-bold leading-[normal] shrink-0 text-[#dceb6b] text-[13px] whitespace-nowrap">
              6 cupos disponibles
            </p>
          </div>
        </div>
      </div>

      {/* Progress Stepper */}
      <div className="flex flex-col items-start pb-[24px] pt-[40px] px-[64px] shrink-0 w-full">
        <div className="flex gap-[16px] items-center w-full">
          {/* Step 1 - complete */}
          <div className="flex flex-1 gap-[12px] items-center min-w-0">
            <div className="bg-[#13201a] border border-[#13201a] border-solid flex items-center justify-center rounded-[16px] shrink-0 size-[32px]">
              <div className="relative shrink-0 size-[14px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheck} />
              </div>
            </div>
            <p className="font-['Outfit:Bold'] font-bold leading-[normal] shrink-0 text-[#13201a] text-[16px] whitespace-nowrap">
              1 Datos del grupo
            </p>
            <div className="flex-1 h-0 min-w-0 relative">
              <div className="absolute inset-[-2px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLineStep2Stepper} />
              </div>
            </div>
          </div>
          {/* Step 2 - active */}
          <div className="flex gap-[12px] items-center shrink-0 w-[320px]">
            <div className="bg-[#dceb6b] flex items-center justify-center rounded-[16px] shrink-0 size-[32px]">
              <p className="font-['Outfit:ExtraBold'] font-extrabold leading-[normal] shrink-0 text-[#13201a] text-[15px] whitespace-nowrap">
                2
              </p>
            </div>
            <p className="font-['Outfit:Bold'] font-bold leading-[normal] shrink-0 text-[#13201a] text-[16px] whitespace-nowrap">
              2 Confirmar reserva
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-[24px] items-center pb-[80px] px-[64px] w-full">

        {/* Countdown Banner */}
        <div className="bg-[rgba(224,92,56,0.07)] border border-[#e05c38] border-solid flex gap-[16px] items-center px-[24px] py-[16px] rounded-[16px] w-[880px] max-w-full">
          <div className="bg-[#e05c38] flex items-center justify-center rounded-[18px] shrink-0 size-[36px]">
            <div className="relative shrink-0 size-[18px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[2px] items-start leading-[normal] min-w-0 whitespace-nowrap">
            <p className="font-['Inter:Medium'] font-medium shrink-0 text-[#13201a] text-[14px]">
              Tu cupo está reservado por
            </p>
            <p className="font-['Inter:Regular'] font-normal shrink-0 text-[#5e6c64] text-[12px]">
              Completa el pago antes de que expire para asegurar tu ingreso.
            </p>
          </div>
          <p className="font-['Outfit:ExtraBold'] font-extrabold leading-[normal] shrink-0 text-[#e05c38] text-[28px] whitespace-nowrap">
            {timeLeft}
          </p>
        </div>

        {/* Summary Card */}
        <div className="bg-white shadow-[0px_12px_12px_rgba(19,32,26,0.05)] flex flex-col gap-[36px] items-start p-[48px] rounded-[24px] w-[880px] max-w-full">

          {/* Section: Detalle del Sendero */}
          <div className="flex flex-col gap-[24px] items-start w-full">
            <SectionEyebrow label="Detalle del Sendero" />
            <div className="flex gap-[24px] items-center w-full">
              <div className="h-[120px] relative rounded-[12px] shrink-0 w-[160px]">
                <img
                  alt="Sendero Lagunas de Siecha"
                  className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full"
                  src={imgTrailPhotoLarge}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[8px] items-start min-w-0">
                <p className="font-['Outfit:Bold'] font-bold leading-[normal] shrink-0 text-[#13201a] text-[22px] whitespace-nowrap">
                  Sendero Lagunas de Siecha
                </p>
                <div className="flex gap-[32px] items-start w-full">
                  <div className="flex flex-col gap-[2px] items-start leading-[normal] shrink-0 whitespace-nowrap">
                    <p className="font-['Inter:Regular'] font-normal shrink-0 text-[#5e6c64] text-[11px] uppercase">
                      Fecha y hora
                    </p>
                    <p className="font-['Inter:Semi_Bold'] font-semibold shrink-0 text-[#0e1c15] text-[14px]">
                      Sábado 14 Dic 2025, 6:00 AM
                    </p>
                  </div>
                  <div className="flex flex-col gap-[2px] items-start leading-[normal] shrink-0 whitespace-nowrap">
                    <p className="font-['Inter:Regular'] font-normal shrink-0 text-[#5e6c64] text-[11px] uppercase">
                      Punto de encuentro
                    </p>
                    <p className="font-['Inter:Semi_Bold'] font-semibold shrink-0 text-[#0e1c15] text-[14px]">
                      Parqueadero Monterredondo
                    </p>
                  </div>
                  <div className="flex flex-col gap-[2px] items-start shrink-0">
                    <p className="font-['Inter:Regular'] font-normal leading-[normal] shrink-0 text-[#5e6c64] text-[11px] uppercase whitespace-nowrap">
                      Duración y Dificultad
                    </p>
                    <div className="flex gap-[8px] items-center shrink-0">
                      <p className="font-['Inter:Semi_Bold'] font-semibold leading-[normal] shrink-0 text-[#0e1c15] text-[14px] whitespace-nowrap">
                        5 horas
                      </p>
                      <div className="bg-[rgba(19,32,26,0.07)] flex items-start px-[8px] py-[4px] rounded-[4px] shrink-0">
                        <p className="font-['Inter:Bold'] font-bold leading-[normal] shrink-0 text-[#13201a] text-[12px] whitespace-nowrap">
                          Moderado
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Grupo */}
          <div className="flex flex-col gap-[24px] items-start w-full">
            <SectionEyebrow label="Grupo" />
            <div className="flex gap-[48px] items-start leading-[normal] w-full">
              <div className="flex flex-1 flex-col gap-[6px] items-start min-w-0 whitespace-nowrap">
                <p className="font-['Inter:Regular'] font-normal shrink-0 text-[#5e6c64] text-[12px] uppercase">
                  Titular
                </p>
                <p className="font-['Inter:Semi_Bold'] font-semibold shrink-0 text-[#0e1c15] text-[16px]">
                  Juan Sebastián Mora
                </p>
              </div>
              <div className="flex flex-1 flex-col gap-[6px] items-start min-w-0 whitespace-nowrap">
                <p className="font-['Inter:Regular'] font-normal shrink-0 text-[#5e6c64] text-[12px] uppercase">
                  Integrantes
                </p>
                <p className="font-['Inter:Semi_Bold'] font-semibold shrink-0 text-[#0e1c15] text-[16px]">
                  3 personas total
                </p>
              </div>
              <div className="flex flex-1 flex-col gap-[6px] items-start min-w-0">
                <p className="font-['Inter:Regular'] font-normal shrink-0 text-[#5e6c64] text-[12px] uppercase whitespace-nowrap">
                  Servicios adicionales
                </p>
                <p className="font-['Inter:Semi_Bold'] font-semibold text-[#0e1c15] text-[16px] whitespace-pre-wrap">
                  {`Transporte: Sí  |  Almuerzo: Sí`}
                </p>
              </div>
              <div className="flex flex-1 flex-col gap-[6px] items-start min-w-0">
                <p className="font-['Inter:Regular'] font-normal shrink-0 text-[#5e6c64] text-[12px] uppercase whitespace-nowrap">
                  Requerimientos
                </p>
                <p className="font-['Inter:Semi_Bold'] font-semibold text-[#0e1c15] text-[16px]">
                  Integrante con asma leve
                </p>
              </div>
            </div>
          </div>

          {/* Section: Resumen de Costos */}
          <div className="flex flex-col gap-[24px] items-start w-full">
            <SectionEyebrow label="Resumen de Costos" />
            <div className="flex flex-col gap-[16px] items-start w-full">
              <div className="flex items-start justify-between leading-[normal] w-full whitespace-nowrap text-[15px]">
                <p className="font-['Inter:Regular'] font-normal shrink-0 text-[#5e6c64]">
                  Entrada sendero (3 pers.)
                </p>
                <p className="font-['Inter:Semi_Bold'] font-semibold shrink-0 text-[#0e1c15]">
                  $555.000 COP
                </p>
              </div>
              <div className="flex items-start justify-between leading-[normal] w-full whitespace-nowrap text-[15px]">
                <p className="font-['Inter:Regular'] font-normal shrink-0 text-[#5e6c64]">
                  Transporte Bogotá (3 pers.)
                </p>
                <p className="font-['Inter:Semi_Bold'] font-semibold shrink-0 text-[#0e1c15]">
                  $135.000 COP
                </p>
              </div>
              <div className="flex items-start justify-between leading-[normal] w-full whitespace-nowrap text-[15px]">
                <p className="font-['Inter:Regular'] font-normal shrink-0 text-[#5e6c64]">
                  Almuerzo de campo (3 pers.)
                </p>
                <p className="font-['Inter:Semi_Bold'] font-semibold shrink-0 text-[#0e1c15]">
                  $75.000 COP
                </p>
              </div>
              <SectionDivider />
              <div className="flex items-baseline justify-between leading-[normal] w-full whitespace-nowrap">
                <p className="font-['Outfit:ExtraBold'] font-extrabold shrink-0 text-[#13201a] text-[20px]">
                  TOTAL
                </p>
                <div className="flex flex-col gap-[4px] items-end shrink-0">
                  <p className="font-['Outfit:Black'] font-black shrink-0 text-[#13201a] text-[32px]">
                    $765.000 COP
                  </p>
                  <p className="font-['Inter:Regular'] font-normal shrink-0 text-[#5e6c64] text-[13px]">
                    Precio por persona: $255.000 COP
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-[24px] items-start w-full">
            <div className="flex items-center justify-between w-full">
              <button
                onClick={onBack}
                className="font-['Outfit:Bold'] font-bold leading-[normal] text-[#13201a] text-[15px] underline [text-underline-position:from-font] [text-decoration-style:solid] whitespace-nowrap cursor-pointer bg-transparent border-none p-0"
              >
                Volver al paso anterior
              </button>
              <button className="bg-[#dceb6b] flex items-center justify-center px-[28px] py-[16px] rounded-[100px] cursor-pointer border-none">
                <p className="font-['Outfit:Bold'] font-bold leading-[normal] text-[#13201a] text-[16px] whitespace-nowrap">
                  Continuar al pago ↗
                </p>
              </button>
            </div>
            <p className="font-['Inter:Regular'] font-normal leading-[normal] text-[#5e6c64] text-[12px] w-full">
              Al continuar aceptas nuestros Términos de Servicio y Política de Cancelación. NativaTrips promueve el turismo carbono neutro y el respeto por las comunidades locales en PNN Chingaza.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [step, setStep] = useState<1 | 2>(1);

  return step === 1
    ? <Step1 onNext={() => setStep(2)} />
    : <Step2 onBack={() => setStep(1)} />;
}
