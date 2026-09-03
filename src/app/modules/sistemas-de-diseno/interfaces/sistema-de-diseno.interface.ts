/** Elemento reutilizable dentro de una lista de beneficios. */
export interface SistemaDeDisenoItem {
	/** Título breve del beneficio. */
	titulo: string;
	/** Explicación del beneficio para el usuario. */
	detalle: string;
}

/** Problema que aparece cuando no existe un sistema de diseño. */
export interface SistemaDeDisenoProblema {
	/** Nombre del problema identificado. */
	problema: string;
	/** Descripción del impacto del problema. */
	detalle: string;
}

/** Elemento que forma parte de un sistema de diseño. */
export interface SistemaDeDisenoComponente {
	/** Nombre del componente o recurso. */
	nombre: string;
	/** Descripción de su propósito dentro del sistema. */
	descripcion: string;
}

/** Nivel de la metodología de diseño atómico. */
export interface SistemaDeDisenoNivel {
	/** Nombre del nivel, por ejemplo, átomos o moléculas. */
	nivel: string;
	/** Características principales del nivel. */
	descripcion: string;
	/** Elementos de ejemplo asociados al nivel. */
	ejemplos?: string[];
}

/**
 * Estructura completa de la información presentada por el módulo.
 *
 * Agrupa el concepto, la utilidad, los problemas, los componentes clave y
 * los niveles del diseño atómico en un único contrato tipado.
 */
export interface SistemaDeDisenoInterface {
	/** Nombre del docente responsable del contenido. */
	docente: string;
	/** Definición general de un sistema de diseño. */
	concepto: {
		/** Título de la sección conceptual. */
		titulo: string;
		/** Descripción del concepto. */
		descripcion: string;
	};
	/** Razones y beneficios de utilizar un sistema de diseño. */
	utilidad: {
		/** Título de la sección de utilidad. */
		titulo: string;
		/** Beneficios principales del sistema. */
		beneficios: SistemaDeDisenoItem[];
	};
	/** Consecuencias de trabajar sin un sistema de diseño. */
	problemasSinSistema: {
		/** Título de la sección de problemas. */
		titulo: string;
		/** Problemas y detalles asociados. */
		puntos: SistemaDeDisenoProblema[];
	};
	/** Recursos que componen un sistema de diseño. */
	componentesClave: SistemaDeDisenoComponente[];
	/** Organización jerárquica propuesta por el diseño atómico. */
	disenoAtomico: {
		/** Explicación general de la metodología. */
		concepto: string;
		/** Niveles que forman la metodología. */
		niveles: SistemaDeDisenoNivel[];
	};
}
