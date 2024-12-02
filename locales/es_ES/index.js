const es_ES = {
  language_name: "Español",
  
  // Menu
  sub_title: "Cifra archivos de forma rápida y segura.",
  home: "Inicio",
  about: "Acerca de",

  // About page menu
  introduction: "Introducción",
  features: "Características",
  installation: "Instalación",
  usage: "Uso",
  limitations: "Limitaciones",
  best_practices: "Mejores practicas",
  faq: "FAQ",
  technical_details: "Detalles técnicos",
  changelog: "Registro de cambios",
  donation_message: "¿Te encanta hat.sh? Puedes donar para apoyar el proyecto.",

  // Settings
  settings: "Ajustes",
  language: "Idioma",
  change_language: "Cambiar el idioma de visualización",
  change_appearance: "Cambiar apariencia",
  language_changed: "Idioma cambiado! - Es necesario recargar la página para que surta efecto.",
  help_translate: "¿No encuentras tu idioma? Puedes ayudar a traducir esta aplicación siguiendo la guía de traducción en github.",
  reload: "RECARGAR",
  dark_mode: "Modo oscuro",
  close: "Cerrar",
  reset: "Reiniciar",
  guide: "Guía",
  multiple_tabs_alert: "Alerta de múltiples pestañas ",
  multiple_tabs_alert_notice_one: "Parece que Hat.sh ya está abierto en otra ventana/pestaña.",
  multiple_tabs_alert_notice_two: "Por favor, evita cifrar/descifrar archivos en diferentes pestañas al mismo tiempo.",
  understand: "ENTIENDO",

  // Common
  file: "archivo",
  files: "archivos",
  password: "Contraseña",
  public_key: "Clave pública",
  private_key: "Clave privada",
  drag_drop: "Arrastrar y soltar o examinar archivo",
  drag_drop_files: "Arrastrar y soltar o examinar archivos",
  browse_file: "Examinar archivo",
  browse_files: "Examinar archivos",
  change_file: "Cambiar archivo",
  add_files: "Añadir archivos",
  next: "Siguiente",
  back: "Volver",
  error: "Error",
  required: "Necesario",
  success: "Éxito",
  show_password: "Mostrar contraseña",
  copy_password: "Copiar contraseña",
  password_copied: "¡Contraseña copiada!",
  show_private_key: "Mostrar clave privada",
  load_public_key: "Cargar clave pública",
  load_private_key: "Cargar clave privada",
  short_password: "Por favor, introduzce una contraseña con una longitud mínima de 12 caracteres. O genera una.",
  wrong_public_key: "Clave pública incorrecta",
  wrong_private_key: "Clave privada incorrecta",
  invalid_keys_input: "Claves introducidas no válidas.",
  invalid_key_pair: "¡Este par de claves no es inválido! Por favor, select keys for different parties.",
  ready_to_download: "¡se ha cargado con éxito y está listo para descargarse!",
  files_ready_to_download: "¡Los archivos se han cargado con éxito y están listos para ser descargados!",
  downloading_file: "Descargando...",
  checking_file: "Comprobando archivo...",
  page_close_alert: "¡No cierres la página mientras se descargan los archivos!",
  offline_note: "Los archivos no se suben a un servidor, todo se hace sin conexión en su navegador.",
  
  // Password Strength Check
  very_weak: "Muy débil (adivinable)",
  weak: "Débil",
  moderate: "Moderada",
  good: "Buena",
  strong: "Fuerte",
  crackTimeEstimation: "estimación de tiempo de craqueo:",
  less_second: "Menos de un segundo",
  seconds: "segundos",
  minutes: "minutos",
  hours: "horas",
  days: "días",
  months: "meses",
  years: "años",
  centuries: "siglos",

  // Encryption
  encryption: "Cifrado",
  drop_file_enc: "Suelta los archivos para cifrarlos",
  choose_files_enc: "Elige los archivos a cifrar",
  enter_password_enc: "Introduce una contraseña",
  enter_keys_enc: "Introduce la clave pública del destinatario y tu clave privada",
  password_strength: "Seguridad de la contraseña",
  choose_strong_password: "Elije una contraseña segura",
  generate_password: "Genera una contraseña",
  recipient_public_key: "Clave pública del destinatario",
  enter_recipient_public_key: "Introduce la clave pública del destinatario",
  your_private_key_enc: "Tu clave privada",
  enter_private_key_enc: "Introduce tu clave privada",
  encrypted_files: "Archivos cifrados",
  download_encrypted_files: "Descargar archivos cifrados",
  success_downloaded_files_enc: "¡Has descargado con éxito los archivos cifrados!",
  encrypt_more_files: "Cifrar más archivos",
  create_shareable_link: "Crear un enlace para compartir",
  create_shareable_link_tooltip: "Crear un enlace que tenga tu clave pública",
  create_shareable_link_note: "Este enlace se creó sin conexión",
  create_shareable_link_copied: "¡Enlace compartible copiado!",
  copy_link: "Copiar enlace",
  after_enc_note_one: "Debes compartir este archivo junto con tu clave pública para que el destinatario pueda descifrarlo.",
  after_enc_note_two: "Puedes crear un enlace que tenga tu clave pública para no tener que enviarla y preocuparte de que el destinatario la introduzca.",
  testing_password: "Probando contraseña...",
  testing_keys: "Probando claves...",

  // Decrypion
  decryption: "Descifrado",
  drop_file_dec: "Suelta los archivos para descifrarlos",
  choose_files_dec: "Elige los archivos a descifrar",
  sender_key_loaded: "La clave pública del remitente está cargada, por favor selecciona el archivo cifrado.",
  recipient_key_loaded: "La clave pública del destinatario está cargada, por favor selecciona un archivo para cifrar.",
  file_not_encrypted_corrupted: "¡Este archivo no fue cifrado usando hat.sh o el archivo puede estar corrupto!",
  old_version: "Este archivo fue cifrado utilizando una versión más antigua de hat.sh, puedes descifrar este archivo visitando la aplicación v1",
  file_mixup: "Los archivos seleccionados para el descifrado tienen que estar cifrados con el mismo método, ya sea mediante contraseña o clave pública. Elige los archivos que coincidan.",
  enter_password_dec: "Introduce la contraseña de descifrado",
  enter_keys_dec: "Introduce la clave pública del remitente y tu clave privada",
  wrong_password: "Contraseña incorrecta",
  file_has_wrong_password: "tiene una contraseña incorrecta, se detuvo la comprobación de contraseña, asegúrate de que todos los archivos tienen la misma contraseña correcta de descifrado.",
  file_has_wrong_keys: "tiene claves incorrectas, se detuvo la comprobación de claves , asegúrese de que todos los archivos tienen las mismas claves correctas de descifrado.",
  sender_public_key: "Clave pública del remitente",
  enter_sender_public_key: "introduzca la clave pública del remitente",
  your_private_key_dec: "Tu clave privada",
  enter_private_key_dec: "Introduce tu clave privada",
  decrypted_files: "Archivos descifrados",
  download_decrypted_files: "Descargar archivos descifrados",
  success_downloaded_files_dec: "Has descargado con éxito los archivos descifrados.",
  decrypt_other_files: "Descifrar otros archivos",


  // Limited
  choose_file_enc: "Elige un archivo para cifrar",
  choose_file_dec: "Elige un archivo para descifrar",
  encrypted_file: "Archivo cifrado",
  decrypted_file: "Archivo desifrado",
  download_encrypted_file: "Descargar archivo cifrado",
  download_decrypted_file: "Descargar archivo descifrado",
  success_downloaded_file_enc: "¡Has descargado con éxito el archivo cifrado!",
  success_downloaded_file_dec: "¡Has descargado con éxito el archivo descifrado!",
  encrypt_another_file: "Cifrar otro archivo",
  decrypt_another_file: "Descifrar otro archivo",
  limited_safari: "El navegador Safari tiene una experiencia limitada (un solo archivo, 1GB)",
  limited_mobile: "Los navegadores móviles tienen una experiencia limitada (un solo archivo, 1GB)",
  limited_private: "Tienes una experiencia limitada (un solo archivo, 1GB) debido a la navegación privada.",
  file_too_big: "¡El archivo es demasiado grande!",
  choose_file_1gb: "Elige un archivo de hasta 1GB.",
  encrypt_file: "Cifrar archivo",
  encrypting_file: "Cifrando...",
  decrypting_file: "Descifrando...",
  page_close_alert_enc: "¡No cierres la página mientras se cifra el archivo!",
  success_encrypted: "¡El archivo fue cifrado correctamente!",
  page_close_alert_dec: "¡No cierres la página mientras se descifra el archivo!",
  success_decrypted: "¡El archivo fue descifrado correctamente!",
  download_file: "Descargar archivo",

  // Keypair generation panel
  generate_now_button: "Generar ahora",
  generate_key_pair_button: "Generar par de claves",
  generate_another_key_pair_button: "Generar otro par",
  key_pair_question: "¿No tienes claves públicas/privadas?",
  key_pair_generation_title: "Generación de pares de claves públicas/privadas:",
  download_public_key: "Descargar clave pública",
  download_private_key: "Descargar clave privada",
  generate_public_key: "Generar clave pública",
  generate_private_key: "Generar clave privada",
  show_private_key: "Mostrar clave privada",
  why_need_private_key: "¿Por qué necesito mi clave privada?",
  private_key_notice: "¡Nunca compartas tu clave privada con nadie! Sólo se deben intercambiar las claves públicas.",
  generate_qr_code: "Generar código QR",
  qr_code_note_one: "Este código QR contiene tu clave pública. Una vez escaneado, el dispositivo se redirigirá a la aplicación y rellenará automáticamente la clave pública.",
  qr_code_note_two: "Puedes compartir este código QR o enlace con otras personas, en lugar de que tengan que introducir manualmente tu clave pública al cifrar los archivos.",
  qr_code_note_three: "Este código QR se generó sin conexión.",
  
};

export default es_ES;