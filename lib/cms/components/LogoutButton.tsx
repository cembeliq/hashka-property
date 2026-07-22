"use client";

import React from "react";
import { Link, LogOutIcon, useConfig, useTranslation } from "@payloadcms/ui";
import { formatAdminURL } from "payload/shared";

export function LogoutButton() {
  const { t } = useTranslation();
  const { config } = useConfig();
  const {
    admin: {
      routes: { logout: logoutRoute },
    },
    routes: { admin: adminRoute },
  } = config;

  return (
    <>
      {/* Below 768px Payload's Nav becomes an off-canvas drawer sized for an
          icon-only button; hide the text label there to avoid overlapping
          the account avatar, matching Payload's own mobile breakpoint. */}
      <style>{`
        .logout-button__label {
          white-space: nowrap;
        }
        @media (max-width: 768px) {
          .logout-button__label {
            display: none;
          }
        }
      `}</style>
      <Link
        aria-label={t("authentication:logOut")}
        className="nav__log-out logout-button"
        href={formatAdminURL({ adminRoute, path: logoutRoute })}
        prefetch={false}
        style={{
          alignItems: "center",
          display: "flex",
          gap: "calc(var(--base) * 0.4)",
        }}
        title={t("authentication:logOut")}
      >
        <LogOutIcon />
        <span className="logout-button__label">{t("authentication:logOut")}</span>
      </Link>
    </>
  );
}
